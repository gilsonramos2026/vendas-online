package com.vendasonline.backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tb_notification_logs")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NotificationLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private String type; // EX: "EMAIL_WELCOME", "SMS_PASSWORD_CHANGED", "EMAIL_PROFILE_UPDATED"

    @Column(nullable = false)
    private String destination; // O e-mail ou número de telefone que recebeu a mensagem

    @Column(name = "sent_at", nullable = false)
    private LocalDateTime sentAt;

    @PrePersist
    protected void onSend() {
        this.sentAt = LocalDateTime.now();
    }
}

