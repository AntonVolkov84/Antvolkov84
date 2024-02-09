function Result(props) {
  console.log(props);
  const { right, allAnswer } = props;
  let disc = (right / allAnswer) * 100;
  return (
    <div className="result">
      <h2 className="result__title">Результат</h2>
      <h2 className="result__num">
        {right}/{allAnswer}
      </h2>
      <h3 className="result__rang">Ранг:</h3>
      <h2 className="result__rangtext">{disc > 50 ? 'ХАЛК' : 'Сопля'}</h2>
    </div>
  );
}

export default Result;
