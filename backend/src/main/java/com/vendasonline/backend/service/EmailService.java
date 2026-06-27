package com.vendasonline.backend.service;

import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    @Async // Faz o método rodar em uma Thread separada em segundo plano
    public void sendWelcomeEmail(String toEmail, String userName) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");

            // Estrutura do HTML do e-mail combinado com a identidade visual (âmbar/zinc) do seu front-end
            String htmlMsg = """
                <div style="font-family: sans-serif; background-color: #18181b; padding: 40px; color: #f4f4f5; border-radius: 16px; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #fbbf24; font-size: 24px; margin-bottom: 16px;">Welcome to Vendas Online, %s! 🚀</h2>
                    <p style="font-size: 16px; line-height: 1.6; color: #d4d4d8;">Your account has been created successfully. Now you can access our platform using your password or via phone token validation.</p>
                    <hr style="border: 0; border-top: 1px solid #3f3f46; margin: 24px 0;" />
                    <p style="font-size: 12px; color: #71717a;">If you did not create this account, please ignore this email.</p>
                </div>
            """.formatted(userName);

            helper.setText(htmlMsg, true); // O 'true' avisa que o conteúdo é um HTML válido
            helper.setTo(toEmail);
            helper.setSubject("Welcome to Vendas Online! 🎉");
            helper.setFrom("no-reply@vendasonline.com");

            mailSender.send(mimeMessage);
            System.out.println("EMAIL ENVIADO COM SUCESSO PARA: " + toEmail);
        } catch (Exception e) {
            System.err.println("FALHA AO ENVIAR EMAIL: " + e.getMessage());
        }
    }
}
