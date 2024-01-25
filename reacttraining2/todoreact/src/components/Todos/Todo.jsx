import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import style from './Todo.module.css';
export function Todo({ todo, hendlerDel, toggleTodoHandler }) {
  return (
    <div
      className={`${style.todo} ${todo.isCompleted ? style.completedTodo : ''}`}
    >
      <RiTodoFill className={style.todo__r} />
      <div className={style.todo__h}>{todo.text}</div>
      <RiDeleteBin2Line
        onClick={() => hendlerDel(todo.id)}
        className={style.deleteIcon}
      />
      <FaCheck
        onClick={() => toggleTodoHandler(todo.id)}
        className={style.checkIcon}
      />
    </div>
  );
}
