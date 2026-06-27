package com.vendasonline.backend.service.ipml;

import com.vendasonline.backend.dto.*;
import com.vendasonline.backend.exception.*;
import com.vendasonline.backend.mapper.UserMapper;
import com.vendasonline.backend.model.*;
import com.vendasonline.backend.repository.*;
import com.vendasonline.backend.service.AuthService;
import com.vendasonline.backend.service.EmailService; // Importação do EmailService
import com.vendasonline.backend.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PhoneTokenRepository phoneTokenRepository;
    private final NotificationLogRepository notificationLogRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final EmailService emailService; // Injetado o novo serviço de email

    @Override
    @Transactional
    public UserResponse register(SignUpRequest request) {
        // 1. Valida se o email ou telefone ja existem no banco
        if (userRepository.existsByEmail(request.email())) {
            throw new ResourceAlreadyExistsException("Email is already registered in our system.");
        }
        if (userRepository.existsByPhoneNumber(request.phoneNumber())) {
            throw new ResourceAlreadyExistsException("Phone number is already registered in our system.");
        }

        // 2. Converte o DTO record para a Entidade usando o MapStruct
        User user = userMapper.toEntity(request);

        // 3. Criptografa a senha antes de salvar no PostgreSQL por seguranca
        user.setPassword(passwordEncoder.encode(request.password()));

        // 4. Salva no banco de dados
        User savedUser = userRepository.save(user);

        // 5. Chamada assíncrona real para enviar o E-mail de Boas-Vindas automático
        emailService.sendWelcomeEmail(savedUser.getEmail(), savedUser.getName());

        // Salva o histórico de auditoria no banco de dados
        saveNotificationLog(savedUser, "EMAIL_WELCOME", savedUser.getEmail());

        return userMapper.toResponse(savedUser);
    }

    @Override
    @Transactional(readOnly = true)
    public String loginWithCredentials(CredentialsLoginRequest request) {
        // Busca o usuario pelo e-mail ou pelo telefone celular informados no mesmo campo
        User user = userRepository.findByEmailOrPhoneNumber(request.identifier(), request.identifier())
                .orElseThrow(() -> new InvalidTokenException("Invalid identifier or password."));

        // Compara a senha digitada com a hash criptografada salva no banco
        if (!passwordEncoder.matches(request.password(), user.getPassword())) {
            throw new InvalidTokenException("Invalid identifier or password.");
        }

        // Emite o token JWT real assinado com os dados do usuário do banco
        return jwtService.generateToken(user);
    }

    @Override
    @Transactional
    public void generateAndSendPhoneToken(PhoneTokenRequest request) {
        // Verifica se o celular informado existe cadastrado no sistema
        User user = userRepository.findByEmailOrPhoneNumber("", request.phoneNumber())
                .orElseThrow(() -> new InvalidTokenException("No account found with this phone number."));

        // Gera um token numerico aleatorio de 6 digitos
        String generatedToken = String.format("%06d", new Random().nextInt(999999));

        // Cria o registro do token com 5 minutos de validade
        PhoneToken phoneToken = PhoneToken.builder()
                .phoneNumber(request.phoneNumber())
                .token(generatedToken)
                .expiresAt(LocalDateTime.now().plusMinutes(5))
                .used(false)
                .build();

        phoneTokenRepository.save(phoneToken);

        // TODO: Chamar API externa (Twilio, Zapi, etc.) para enviar o SMS/WhatsApp real
        saveNotificationLog(user, "SMS_OTP_TOKEN", request.phoneNumber());
        System.out.println("TOKEN GERADO PARA CELULAR: " + generatedToken); // Log temporario de teste
    }

    @Override
    @Transactional
    public String loginWithPhoneToken(PhoneLoginRequest request) {
        // Busca o token nao utilizado mais recente enviado para aquele celular
        PhoneToken activeToken = phoneTokenRepository
                .findFirstByPhoneNumberAndUsedFalseOrderByExpiresAtDesc(request.phoneNumber())
                .orElseThrow(() -> new InvalidTokenException("No active token found for this phone number."));

        // Valida se o codigo bate e se nao está expirado
        if (!activeToken.getToken().equals(request.code()) || activeToken.isExpired()) {
            throw new InvalidTokenException("The verification code is incorrect or has expired.");
        }

        // Busca o usuário dono desse número para conseguir embutir o Name e a Role dentro das claims do JWT
        User user = userRepository.findByEmailOrPhoneNumber("", request.phoneNumber())
                .orElseThrow(() -> new InvalidTokenException("User record not found for this phone number."));

        // Marca o token como utilizado para inutiliza-lo
        activeToken.setUsed(true);
        phoneTokenRepository.save(activeToken);

        // Emite o token JWT real para o login sem senha via celular
        return jwtService.generateToken(user);
    }

    // Metodo auxiliar para persistir o historico de mensagens enviadas
    private void saveNotificationLog(User user, String type, String destination) {
        NotificationLog log = NotificationLog.builder()
                .user(user)
                .type(type)
                .destination(destination)
                .build();
        notificationLogRepository.save(log);
    }
}
