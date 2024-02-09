import { useState } from 'react';
let acc = 0;
let allQuestion = 0;
function Test(props) {
  let res = props.result;

  const [answer, setAnswer] = useState(null);
  return (
    <div id={props.id} className="test">
      <h2 className="test__title">Вопрос {props.id}</h2>
      <div className="test__head">
        <img className="test__head__img" src={props.img} alt="first" />
        <h3 className="test__head__question">{props.question}</h3>
      </div>
      <hr className="test__answer__hr"></hr>
      <h2 className="test__answer__title">Варианты ответа</h2>
      <div className="test__answer__text">
        <form
          data-list={answer}
          onSubmit={(event) => {
            event.preventDefault();
            allQuestion = allQuestion + 1;
            event.target.dataset.list === props.rightAnswer
              ? (acc = acc + 1)
              : (acc = acc);
            document.getElementById(`${props.id}`).classList.add('dis');
            res(acc, allQuestion);
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
