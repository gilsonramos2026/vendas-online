package com.vendasonline.backend.exception;

import java.time.LocalDateTime;
import java.util.Map;

public record CustomErrorResponse(
        LocalDateTime timestamp,
        int status,
        String error,
        String message,
        String path,
        Map<String, String> validationErrors // Guarda erros de campos específicos (Ex: "email": "Invalid format")
) {
    // Construtor auxiliar simplificado para erros comuns sem validação de múltiplos campos
    public CustomErrorResponse(int status, String error, String message, String path) {
        this(LocalDateTime.now(), status, error, message, path, null);
    }
}
