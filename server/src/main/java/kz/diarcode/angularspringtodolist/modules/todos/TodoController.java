package kz.diarcode.angularspringtodolist.modules.todos;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kz.diarcode.angularspringtodolist.modules.todos.models.Todo;
import kz.diarcode.angularspringtodolist.modules.todos.models.dto.CreateTodoDto;
import kz.diarcode.angularspringtodolist.modules.todos.models.dto.UpdateTodoDto;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1/todos")
@AllArgsConstructor
public class TodoController {
    private final TodoService todoService;

    @GetMapping()
    public List<Todo> getAllTodos(@RequestParam Optional<Long> userId) {
        return todoService.getAllTodos(userId);
    }

    @GetMapping("/{id}")
    public Todo getTodoById(@PathVariable Long id) {
        return todoService.getTodoById(id);
    }

    @PostMapping()
    public Todo createTodo(@RequestBody CreateTodoDto dto) {
        return todoService.createTodo(dto);
    }

    @DeleteMapping("/{id}")
    public void deleteTodoById(@PathVariable Long id) {
        todoService.deleteTodoById(id);
    }

    @PatchMapping("/complete/{id}")
    public Todo completeTodoById(@PathVariable Long id) {
        return todoService.completeTodoById(id);
    }

    @PatchMapping("/{id}")
    public Todo updateTodoById(@PathVariable Long id, @RequestBody UpdateTodoDto dto) {
        return todoService.updateTodoById(id, dto);
    }
}
