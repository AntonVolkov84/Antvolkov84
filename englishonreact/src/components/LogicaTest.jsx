import { useNavigate } from 'react-router-dom';
import Test from './Test';
import { dataLogicaTest } from './dataLogicaTest';

function LogicaTest({ result }) {
  const navigate = useNavigate();
  return (
    <div className="Logicatest">
      <div>
        <h1>Тести з логіки</h1>
        {dataLogicaTest.map((el) => {
          return <Test result={result} key={el.id} {...el} />;
        })}
      </div>
      <button
        onClick={() => {
          navigate('../result');
        }}
        className="btn"
      >
        Перевірити відповіді
      </button>
    </div>
  );
}
export default LogicaTest;
