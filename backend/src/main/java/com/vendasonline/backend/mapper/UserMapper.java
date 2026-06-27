package com.vendasonline.backend.mapper;

import com.vendasonline.backend.dto.SignUpRequest;
import com.vendasonline.backend.dto.UserResponse;
import com.vendasonline.backend.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    // Ignoramos campos gerados automaticamente pelo banco ou pelo ciclo de vida da entidade
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "role", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "emailVerified", ignore = true)
    @Mapping(target = "phoneVerified", ignore = true)
    User toEntity(SignUpRequest request);

    // Mapeia a entidade cheia para a resposta segura sem a senha
    UserResponse toResponse(User entity);
}

