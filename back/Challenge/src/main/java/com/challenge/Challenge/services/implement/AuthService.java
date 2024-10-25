package com.challenge.Challenge.services.implement;

import com.challenge.Challenge.dtos.AuthDtoResponse;
import com.challenge.Challenge.dtos.LoginRequest;
import com.challenge.Challenge.dtos.RegisterRequest;
import com.challenge.Challenge.exceptions.InvalidDataException;
import com.challenge.Challenge.exceptions.ModelNotFoundException;
import com.challenge.Challenge.exceptions.ResourceExistsException;
import com.challenge.Challenge.jwt.JwtProvider;
import com.challenge.Challenge.models.User;
import com.challenge.Challenge.repositories.IUserRepository;
import com.challenge.Challenge.services.interfaces.IAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.stereotype.Service;

import java.util.Optional;


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
                ()-> new ModelNotFoundException("Not found User with email " + request.getEmail())
        );
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())){
            throw new InvalidDataException("Invalid email or password");
        }
        return AuthDtoResponse.builder()
                .token(jwtProvider.getToken(user)).build();
    }

    @Override
    public AuthDtoResponse register(RegisterRequest request) {
        try{
            User user = new User();
            Optional<User> optional = userRepository.findByEmail(request.getEmail());
            if (optional.isPresent()){
                throw new ResourceExistsException("User already exists " + request.getEmail());
            }
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
