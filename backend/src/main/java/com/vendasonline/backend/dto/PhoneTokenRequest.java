package com.vendasonline.backend.dto;

import jakarta.validation.constraints.NotBlank;

public record PhoneTokenRequest(
        @NotBlank(message = "Phone number is required")
        String phoneNumber
) {}

