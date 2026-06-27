package com.vendasonline.backend.repository;

import com.vendasonline.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Busca um usuário pelo e-mail ou pelo número de telefone (Login unificado)
    Optional<User> findByEmailOrPhoneNumber(String email, String phoneNumber);

    // Métodos para checagem rápida no SignUp (Evita cadastros duplicados)
    boolean existsByEmail(String email);
    boolean existsByPhoneNumber(String phoneNumber);
}

