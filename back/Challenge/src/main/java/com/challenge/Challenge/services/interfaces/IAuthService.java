package com.challenge.Challenge.services.interfaces;

import com.challenge.Challenge.dtos.AuthDtoResponse;
import com.challenge.Challenge.dtos.LoginRequest;
import com.challenge.Challenge.dtos.RegisterRequest;
import org.springframework.stereotype.Service;


public interface IAuthService {
    AuthDtoResponse login(LoginRequest request);
    AuthDtoResponse register(RegisterRequest request);
}
