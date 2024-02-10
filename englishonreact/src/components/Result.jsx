import { Link, useLocation, useNavigate } from 'react-router-dom';
function Result(props) {
  const location = useLocation();
  const { right, allAnswer, result } = props;
  let disc = (right / allAnswer) * 100;
  console.log(result);
  const navigation = useNavigate();
  return (
    <div className="result">
      <h2 className="result__title">Результат</h2>
      <h2 className="result__num">
        {right}/{allAnswer}
      </h2>
      <h3 className="result__rang">Ранг:</h3>
      <h2 className="result__rangtext">
        {disc > 55 ? 'Да ти Халк' : 'Ох і сопля'}
      </h2>
      <Link className="btn__text" to="/">
        <button
          onClick={() => {
            navigation('/');
            document.location.reload();
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
