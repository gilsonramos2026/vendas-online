package com.vendasonline.backend.dto;

import com.vendasonline.backend.model.UserRole;
import java.time.LocalDateTime;

public record UserResponse(
        Long id,
        String name,
        String email,
        String phoneNumber,
        UserRole role,
        LocalDateTime createdAt
) {}

