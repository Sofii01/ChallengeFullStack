package com.challenge.Challenge.services.implement;

import com.challenge.Challenge.dtos.AuthDtoResponse;
import com.challenge.Challenge.dtos.LoginRequest;
import com.challenge.Challenge.dtos.RegisterRequest;
import com.challenge.Challenge.jwt.JwtProvider;
import com.challenge.Challenge.models.User;
import com.challenge.Challenge.repositories.IUserRepository;
import com.challenge.Challenge.services.interfaces.IAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.stereotype.Service;



@Service

public class AuthService implements IAuthService {
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    @Autowired
    private IUserRepository userRepository;
    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public AuthDtoResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow(
                ()-> new RuntimeException("User not found with email: " + request.getEmail())
        );
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())){
            throw new RuntimeException("Invalid email or password");
        }
        return AuthDtoResponse.builder()
                .token(jwtProvider.getToken(user)).build();
    }

    @Override
    public AuthDtoResponse register(RegisterRequest request) {
        try{
            User user = new User();
            user.setEmail(request.getEmail());
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            userRepository.save(user);
            return AuthDtoResponse.builder()
                    .token(jwtProvider.getToken(user))
                    .build();

        }catch (Exception e){
            throw new RuntimeException("Cannot register user " + e.getMessage());
        }
    }
}
