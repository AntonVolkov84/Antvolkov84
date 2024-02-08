import { useState } from 'react';
import { dataEnglishTest } from './dataEnglishTest';

function Test(props) {
  const [answer, setAnswer] = useState(null);
  return (
    <div className="test">
      <h2 className="test__title">Вопрос {props.id}</h2>
      <div className="test__head">
        <img className="test__head__img" src={props.img} alt="first" />
        <h3 className="test__head__question">{props.question}</h3>
      </div>
      <hr className="test__answer__hr"></hr>
      <h2 className="test__answer__title">Варианты ответа</h2>
      <div className="test__answer__text">
        <form onSubmit={pickAnswer} className="test__answer__text__variants">
          <label>
            <input
              checked={answer === props.answers[0]}
              onChange={() => setAnswer(props.answers[0])}
              type="radio"
            />
            {props.answers[0]}
          </label>
          <label>
            <input
              checked={answer === props.answers[1]}
              onChange={() => setAnswer(props.answers[1])}
              type="radio"
            />
            {props.answers[1]}
          </label>
          <label>
            <input
              checked={answer === props.answers[2]}
              onChange={() => setAnswer(props.answers[2])}
              type="radio"
            />
            {props.answers[2]}
          </label>
          <label>
            <input
              checked={answer === props.answers[3]}
              onChange={() => setAnswer(props.answers[3])}
              type="radio"
            />
            {props.answers[3]}
          </label>
          <button type="submit" className="btn">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}
export default Test;
function pickAnswer(event) {
  event.preventDefault();
  console.log(event.target);
}
