package com.vendasonline.backend.config;

import com.vendasonline.backend.model.User;
import com.vendasonline.backend.model.UserRole;
import com.vendasonline.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AdminInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        String adminEmail = "admin@vendasonline.com";

        // Checa se o administrador já foi criado no Postgres para não duplicar
        if (!userRepository.existsByEmail(adminEmail)) {

            User admin = User.builder()
                    .name("System Admin")
                    .email(adminEmail)
                    .phoneNumber("+5511999998888") // Celular do admin para testes de Token
                    .password(passwordEncoder.encode("Admin@2026")) // Criptografa a senha padrão do Admin
                    .role(UserRole.ADMIN) // Força o papel como ADMIN
                    .emailVerified(true)
                    .phoneVerified(true)
                    .build();

            userRepository.save(admin);

            System.out.println("====================================================");
            System.out.println("🚀 DEFAULT ADMIN ACCOUNT CREATED SUCCESSFULLY!");
            System.out.println("📧 Email: " + adminEmail);
            System.out.println("🔑 Password: Admin@2026");
            System.out.println("====================================================");
        }
    }
}

