package com.challenge.Challenge.services.implement;

import com.challenge.Challenge.dtos.AuthDtoResponse;
import com.challenge.Challenge.dtos.LoginRequest;
import com.challenge.Challenge.dtos.RegisterRequest;
import com.challenge.Challenge.jwt.JwtProvider;
import com.challenge.Challenge.models.User;
import com.challenge.Challenge.repositories.IUserRepository;
import com.challenge.Challenge.services.interfaces.IAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service

public class AuthService implements IAuthService {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private IUserRepository userRepository;
    @Autowired
    private JwtProvider jwtProvider;
    @Override
    public AuthDtoResponse login(LoginRequest request) {
        return null;
    }

    @Override
    public AuthDtoResponse register(RegisterRequest request) {
        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        userRepository.save(user);
        return AuthDtoResponse.builder()
                .token(jwtProvider.getToken(user))
                .build();
    }
}
