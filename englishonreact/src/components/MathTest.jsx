import { useNavigate } from 'react-router-dom';
import Test from './Test';
import { dataMathTest } from './dataMathTest';

function MathTest({ result }) {
  const navigate = useNavigate();
  return (
    <div className="englishtest">
      <div>
        <h1>Математичні тести</h1>
        {dataMathTest.map((el) => {
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
export default MathTest;
