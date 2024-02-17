import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Result() {
  const rightAnswer = useSelector((state) => state.rightAnswer);
  const allAnswer1 = useSelector((state) => state.allAnswer1);
  const dispatch = useDispatch();

  let disc = (rightAnswer / allAnswer1) * 100;
  const navigation = useNavigate();
  window.onpopstate = () => {
    dispatch({ type: 'ADD_NULL', payload: 0 });
  };
  return (
    <div className="result">
      <h2 className="result__title">Результат</h2>
      <h2 className="result__num">
        {rightAnswer}/{allAnswer1}
      </h2>
      <h3 className="result__rang">Ранг:</h3>
      <h2 className="result__rangtext">
        {disc > 55 ? 'Да ти Халк' : 'Ох і сопля'}
      </h2>
      <Link className="btn__text" to="/">
        <button
          onClick={() => {
            navigation('/');
            dispatch({ type: 'ADD_NULL', payload: 0 });
          }}
          className="btn"
        >
          До інших тестів
        </button>
      </Link>
    </div>
  );
}

export default Result;
