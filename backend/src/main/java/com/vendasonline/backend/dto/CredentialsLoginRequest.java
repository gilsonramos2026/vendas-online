package com.vendasonline.backend.dto;

import jakarta.validation.constraints.NotBlank;

public record CredentialsLoginRequest(
        @NotBlank(message = "Identifier (Email or Phone) is required")
        String identifier,

        @NotBlank(message = "Password is required")
        String password
) {}
