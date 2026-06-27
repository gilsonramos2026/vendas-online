package com.vendasonline.backend.repository;

import com.vendasonline.backend.model.NotificationLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface NotificationLogRepository extends JpaRepository<NotificationLog, Long> {

    // Busca o histórico de notificações disparadas para um usuário específico
    List<NotificationLog> findByUserIdOrderBySentAtDesc(Long userId);
}
