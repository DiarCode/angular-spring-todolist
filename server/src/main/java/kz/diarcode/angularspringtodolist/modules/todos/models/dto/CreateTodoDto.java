package kz.diarcode.angularspringtodolist.modules.todos.models.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateTodoDto {
    private String title;
    private Long userId;
    private Date deadline;
}
