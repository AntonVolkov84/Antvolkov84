import { Todo } from './Todo';
import style from './TodoList.module.css';

export function TodoList({ toggleTodoHandler, todos, hendlerDel }) {
  return (
    <div className="style.todoList">
      {todos.length === 0 ? (
        <h2 className={style.todoList__h}>Todos is empty</h2>
      ) : (
        todos.map((todo) => (
          <Todo
            toggleTodoHandler={toggleTodoHandler}
            hendlerDel={hendlerDel}
            key={todo.id}
            todo={todo}
          />
        ))
      )}
    </div>
  );
}
