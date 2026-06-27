package com.vendasonline.backend.service;

import com.vendasonline.backend.dto.*;

public interface AuthService {

    // Contrato para cadastrar um novo usuário (Sign Up)
    UserResponse register(SignUpRequest request);

    // Contrato para a primeira aba de Login (Email/Celular + Senha)
    String loginWithCredentials(CredentialsLoginRequest request);

    // Contrato para o passo 1 da segunda aba (Gerar e disparar o Token SMS)
    void generateAndSendPhoneToken(PhoneTokenRequest request);

    // Contrato para o passo 2 da segunda aba (Validar o Token recebido e logar)
    String loginWithPhoneToken(PhoneLoginRequest request);
}
