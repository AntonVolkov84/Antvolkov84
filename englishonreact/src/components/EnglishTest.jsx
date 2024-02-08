import Test from './Test';
import { dataEnglishTest } from './dataEnglishTest';

function EnglishTest() {
  return (
    <div>
      <h1>English test</h1>
      {dataEnglishTest.map((el) => {
        return <Test key={el.id} {...el} />;
      })}
    </div>
  );
}

export default EnglishTest;
