package kz.diarcode.angularspringtodolist.modules.auth;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kz.diarcode.angularspringtodolist.modules.auth.models.AuthResponse;
import kz.diarcode.angularspringtodolist.modules.auth.models.dto.LoginDto;
import kz.diarcode.angularspringtodolist.modules.auth.models.dto.SignupDto;
import kz.diarcode.angularspringtodolist.modules.auth.services.AuthService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/signup")
    public AuthResponse signup(@RequestBody SignupDto dto) {
        return authService.signup(dto);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginDto dto) {
        return authService.login(dto);
    }

}