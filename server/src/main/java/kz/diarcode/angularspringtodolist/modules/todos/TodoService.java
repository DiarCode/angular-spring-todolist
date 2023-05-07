package kz.diarcode.angularspringtodolist.modules.todos;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import kz.diarcode.angularspringtodolist.modules.todos.models.Todo;
import kz.diarcode.angularspringtodolist.modules.todos.models.dto.CreateTodoDto;
import kz.diarcode.angularspringtodolist.modules.todos.models.dto.UpdateTodoDto;
import kz.diarcode.angularspringtodolist.modules.user.UserService;
import kz.diarcode.angularspringtodolist.modules.user.models.User;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;
    private final UserService userService;

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public List<Todo> getAllTodos(Optional<Long> userId) {
        if (userId.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Provide user id");
        }

        User user = userService.getUserById(userId.get());

        return todoRepository.findAllByUser(user);
    }

    public Todo createTodo(CreateTodoDto dto) {
        User user = userService.getUserById(dto.getUserId());

        Todo todo = Todo.builder()
                .title(dto.getTitle())
                .user(user)
                .completed(false)
                .deadline(dto.getDeadline())
                .build();

        return todoRepository.save(todo);
    }

    public Todo getTodoById(Long id) {
        return todoRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "No such todo"));
    }

    public void deleteTodoById(Long id) {
        boolean todoExists = todoRepository.existsById(id);

        if (!todoExists) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Todo not found");
        }

        todoRepository.deleteById(id);
    }

    public Todo updateTodoById(Long id, UpdateTodoDto dto) {
        Todo existingTodo = this.getTodoById(id);
        existingTodo.setTitle(dto.getTitle());

        return todoRepository.save(existingTodo);
    }

    public Todo completeTodoById(Long id) {
        Todo existingTodo = this.getTodoById(id);

        if (existingTodo.isCompleted()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Todo is already completed");
        }

        existingTodo.setCompleted(true);
        return todoRepository.saveAndFlush(existingTodo);
    }

}
