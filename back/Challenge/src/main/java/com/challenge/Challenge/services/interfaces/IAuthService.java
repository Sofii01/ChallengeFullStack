package com.challenge.Challenge.services.interfaces;

import com.challenge.Challenge.dtos.AuthDto;
import com.challenge.Challenge.dtos.LoginRequest;
import com.challenge.Challenge.dtos.RegisterRequest;

public interface IAuthService {
    AuthDto login(LoginRequest request);
    AuthDto register(RegisterRequest request);
}
