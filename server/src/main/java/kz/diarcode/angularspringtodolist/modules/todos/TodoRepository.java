package kz.diarcode.angularspringtodolist.modules.todos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kz.diarcode.angularspringtodolist.modules.todos.models.Todo;
import kz.diarcode.angularspringtodolist.modules.user.models.User;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Todo> findAllByUser(User user);
}