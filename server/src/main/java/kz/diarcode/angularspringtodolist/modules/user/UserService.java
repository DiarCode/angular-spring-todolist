package kz.diarcode.angularspringtodolist.modules.user;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import kz.diarcode.angularspringtodolist.modules.user.models.User;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "User not found"));
    }

    public User getUserByEmail(String email) {
        return userRepository.findUserByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "User not found"));
    }

    public void deleteUserById(Long id) {
        boolean userExists = userRepository.existsById(id);

        if (!userExists) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User not found");
        }

        userRepository.deleteById(id);
    }

    public User createUser(User user) {
        boolean userExists = userRepository.existsByEmail(user.getEmail());

        if (userExists) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User already exists");
        }

        return userRepository.save(user);
    }
}
