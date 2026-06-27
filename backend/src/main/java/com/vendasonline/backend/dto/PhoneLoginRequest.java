package com.vendasonline.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record PhoneLoginRequest(
        @NotBlank(message = "Phone number is required")
        String phoneNumber,

        @NotBlank(message = "Verification code is required")
        @Size(min = 6, max = 6, message = "Verification code must be exactly 6 digits")
        String code
) {}

