package com.vendasonline.backend.service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class SmsService {

    @Value("${twilio.account.sid}")
    private String accountSid;

    @Value("${twilio.auth.token}")
    private String authToken;

    @Value("${twilio.phone.number}")
    private String fromPhoneNumber;

    @PostConstruct
    public void initTwilio() {
        // Inicializa a conexao com a Twilio assim que o Spring Boot sobe
        Twilio.init(accountSid, authToken);
    }

    @Async // Roda em background para nao travar a tela do usuario
    public void sendVerificationToken(String toPhoneNumber, String token) {
        try {
            String messageBody = "Vendas Online: Your verification code is " + token + ". Valid for 5 minutes.";

            Message.creator(
                    new PhoneNumber(toPhoneNumber), // Celular do usuario (Ex: +5511999999999)
                    new PhoneNumber(fromPhoneNumber), // Seu numero virtual Twilio
                    messageBody
            ).create();

            System.out.println("SMS SENT SUCCESSFULLY TO: " + toPhoneNumber);
        } catch (Exception e) {
            System.err.println("FAILED TO SEND SMS: " + e.getMessage());
        }
    }
}

