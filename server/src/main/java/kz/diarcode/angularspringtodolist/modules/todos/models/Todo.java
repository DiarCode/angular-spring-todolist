package kz.diarcode.angularspringtodolist.modules.todos.models;


import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import kz.diarcode.angularspringtodolist.modules.user.models.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Table(name = "todos")
public class Todo {
        @Id
        @SequenceGenerator(name = "todo_sequence", sequenceName = "todo_sequence", allocationSize = 1)
        @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "todo_sequence")
        @Column(name = "id")
        private Long id;

        private String title;
        private boolean completed;
        private Date deadline;

        @ManyToOne()
        @JoinColumn(name = "user_id")
        private User user;

}
