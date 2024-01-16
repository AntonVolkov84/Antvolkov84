import { useEffect, useState } from 'react';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { RandomNumbers } from './components/RandomNumbers';
import { Counter } from './components/Counter';
import { Button } from './components/Button';
import { Persons } from './components/Persons';
import { Reset } from './components/Reset';
import Card from './components/Card';
import { Login } from './components/Login';
import { Wrapper } from './components/Wrapper';
import { Posts } from './components/Posts';
import Info from './components/Info';

function App() {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/4')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);
  console.log('App render');

  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const texts = ['Hello', 'first click', 'second click'];

  const hendleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <MyComponent name="Djonie" age={2} hasPet />
      <MyComponent name="Leonardo" age={6} hasPet />
      <MyComponent name="Leonardo" age={6} hasPet={false} />
      <RandomNumbers maxNum={8} />
      <br />
      <Counter counter={count} />
      <div>
        {texts.map((text, index) => {
          return <Button text={text} setCount={incrementCount} key={index} />;
        })}
      </div>
      <Reset count={count} hendleReset={hendleReset} />
      <br />
      <Persons />
      <Card />
      {/* Ниже неконтролируемые инпуты и контролируемые тут же */}
      <Login />
      <br />
      <Wrapper>
        <h2>Text inside</h2>
        <h2>Text inside number two</h2>
      </Wrapper>
      <hr />
      <br />
      <hr />
      {todo && <h1>{todo.title}</h1>}
      {/* <Posts /> */}
      <Info />
    </div>
  );
}

export default App;
