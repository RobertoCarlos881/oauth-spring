package com.tutorial.authorizationserver.dto;

import java.util.List;

public record CreateAppUserDTO (
        String username,
        String password,
        List<String> roles) {}
