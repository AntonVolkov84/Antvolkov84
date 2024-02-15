import { useNavigate } from 'react-router-dom';
import Test from './Test';
import { dataEnglishTest } from './dataEnglishTest';

function EnglishTest() {
  
  const navigate = useNavigate();
 
  return (
    <div className="englishtest">
      <div>
        <h1>English test</h1>
        {dataEnglishTest.map((el) => {
          return <Test key={el.id} {...el} />;
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

export default EnglishTest;
