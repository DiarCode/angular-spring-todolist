package kz.diarcode.angularspringtodolist.modules.auth.models.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SignupDto {
    private String name;
    private String email;
    private String password;
}
