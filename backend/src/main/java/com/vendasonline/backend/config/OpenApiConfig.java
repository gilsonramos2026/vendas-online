package com.vendasonline.backend.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        final String securitySchemeName = "bearerAuth";

        return new OpenAPI()
                // 1. Informações visuais do topo da página do Swagger
                .info(new Info()
                        .title("Vendas Online API")
                        .version("1.0.0")
                        .description("Backend RESTful para a plataforma Vendas Online, com suporte a login por senha ou Token via celular.")
                        .license(new License().name("Apache 2.0").url("https://springdoc.org")))

                // 2. Adiciona o requisito de segurança globalmente em todas as rotas do Swagger
                .addSecurityItem(new SecurityRequirement().addList(securitySchemeName))

                // 3. Configura o botão de "Authorize" (Cadeado) para aceitar tokens no padrão Bearer JWT
                .components(new Components()
                        .addSecuritySchemes(securitySchemeName,
                                new SecurityScheme()
                                        .name(securitySchemeName)
                                        .type(SecurityScheme.Type.HTTP)
                                        .scheme("bearer")
                                        .bearerFormat("JWT")
                                        .description("Insira apenas o seu token JWT no campo abaixo para liberar as rotas protegidas.")));
    }
}

