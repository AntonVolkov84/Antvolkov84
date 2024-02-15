import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Test(props) {
  const dispatch = useDispatch();
  const addAnswer = (value) => {
    dispatch({ type: 'ADD_ANSWERS', payload: value });
  };
    
  const [answer, setAnswer] = useState(null);

  return (
    <div id={props.id} className="test">
      <h2 className="test__title">Вопрос {props.id}</h2>
      <div className="test__head">
        <img className="test__head__img" src={props.img} alt="first" />
        <h3 className="test__head__question">{props.question}</h3>
      </div>
      <div className="test__answer__two">
        <hr className="test__answer__hr"></hr>
        <h2 className="test__answer__title">Варианты ответа</h2>
      </div>
      <div className="test__answer__text">
        <form
          data-list={answer}
          onSubmit={(event) => {
            if (!event.target.dataset.list) {
              return alert('Ви не обрали відповідь');
            }
            event.preventDefault();
            event.target.dataset.list === props.rightAnswer
              ? addAnswer(1)
              : addAnswer(0);
            document.getElementById(`${props.id}`).classList.add('dis');
          }}
          className="test__answer__text__variants"
        >
          {props.answers.map((item) => {
            return (
              <label key={item}>
                <input
                  value={item}
                  checked={answer === item}
                  onChange={() => setAnswer(item)}
                  type="radio"
                />
                {item}
              </label>
            );
          })}

          <button type="submit" className="btn">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}
export default Test;
