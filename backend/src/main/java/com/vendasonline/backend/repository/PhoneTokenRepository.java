package com.vendasonline.backend.repository;

import com.vendasonline.backend.model.PhoneToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface PhoneTokenRepository extends JpaRepository<PhoneToken, Long> {

    // Busca o token ativo mais recente enviado para o celular e que ainda não foi usado
    Optional<PhoneToken> findFirstByPhoneNumberAndUsedFalseOrderByExpiresAtDesc(String phoneNumber);
}

