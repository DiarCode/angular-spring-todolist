package kz.diarcode.angularspringtodolist.modules.auth.services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import kz.diarcode.angularspringtodolist.modules.auth.models.AuthResponse;
import kz.diarcode.angularspringtodolist.modules.auth.models.dto.LoginDto;
import kz.diarcode.angularspringtodolist.modules.auth.models.dto.SignupDto;
import kz.diarcode.angularspringtodolist.modules.user.UserService;
import kz.diarcode.angularspringtodolist.modules.user.models.Role;
import kz.diarcode.angularspringtodolist.modules.user.models.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authManager;

    public AuthResponse signup(SignupDto dto) {
        User candidate = User
                .builder()
                .email(dto.getEmail())
                .name(dto.getName())
                .password(passwordEncoder.encode(dto.getPassword()))
                .role(Role.USER)
                .build();

        User user = userService.createUser(candidate);
        String token = jwtService.generateToken(user);

        return AuthResponse.builder()
                .email(user.getEmail())
                .name(user.getName())
                .id(user.getId())
                .token(token)
                .build();
    }

    public AuthResponse login(LoginDto dto) {
        authManager
                .authenticate(new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getPassword()));

        User user = userService.getUserByEmail(dto.getEmail());
        String token = jwtService.generateToken(user);

        return AuthResponse.builder()
                .email(user.getEmail())
                .name(user.getName())
                .id(user.getId())
                .token(token)
                .build();
    }

}