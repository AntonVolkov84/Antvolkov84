import { useState } from 'react';
import style from './TodoForm.module.css';
import { TodoList } from './TodoList';
import { Button } from '../UI/Button';

export function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    event.target.reset();
  };

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <form onSubmit={onSubmitHandler} className={style.todoForm}>
      <input
        onChange={handleChange}
        placeholder="Enter new todo"
        className={style.todoForm__input}
        type="text"
      />
      <Button type="submit" className={style.todoForm__btn} title="Submit">
        Submit
      </Button>
    </form>
  );
}
