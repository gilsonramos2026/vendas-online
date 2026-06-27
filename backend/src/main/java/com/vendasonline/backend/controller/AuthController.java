package com.vendasonline.backend.controller;

import com.vendasonline.backend.dto.*;
import com.vendasonline.backend.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "Endpoints para registro e login em duas abas (Senha ou Token de Celular)")
public class AuthController {

    private final AuthService authService;

    @Operation(summary = "Criar nova conta (Sign Up)", description = "Cadastra um novo usuário no banco de dados e envia um e-mail automático de boas-vindas.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Usuário registrado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Dados de entrada inválidos"),
            @ApiResponse(responseCode = "409", description = "E-mail ou número de telefone já cadastrado")
    })
    @PostMapping("/signup")
    public ResponseEntity<UserResponse> signUp(@Valid @RequestBody SignUpRequest request) {
        UserResponse response = authService.register(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @Operation(summary = "Login com Email/Telefone e Senha", description = "Valida as credenciais inseridas na primeira aba de login do front-end.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Autenticação realizada com sucesso, retorna o JWT"),
            @ApiResponse(responseCode = "400", description = "Dados de entrada inválidos"),
            @ApiResponse(responseCode = "401", description = "Identificador ou senha incorretos")
    })
    @PostMapping("/login/credentials")
    public ResponseEntity<String> loginWithCredentials(@Valid @RequestBody CredentialsLoginRequest request) {
        String token = authService.loginWithCredentials(request);
        return ResponseEntity.ok(token);
    }

    @Operation(summary = "Solicitar Token SMS", description = "Gera um código aleatório de 6 dígitos e envia por celular para habilitar o login sem senha da segunda aba.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Código enviado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Dados inválidos ou conta não encontrada com o número informado")
    })
    @PostMapping("/phone/send-token")
    public ResponseEntity<Void> sendPhoneToken(@Valid @RequestBody PhoneTokenRequest request) {
        authService.generateAndSendPhoneToken(request);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Login com Token do Celular", description = "Valida o código de 6 dígitos recebido por SMS e autoriza o acesso do usuário.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Token válido, login autorizado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Código inválido ou expirado")
    })
    @PostMapping("/login/phone-token")
    public ResponseEntity<String> loginWithPhoneToken(@Valid @RequestBody PhoneLoginRequest request) {
        String token = authService.loginWithPhoneToken(request);
        return ResponseEntity.ok(token);
    }
}
