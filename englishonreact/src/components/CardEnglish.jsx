import { Link } from 'react-router-dom';

function CardEnglish() {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="card__head">
          <div className="card__head__back"></div>
          <div className="card__head__date">
            <div className="card__head__date__day">English</div>
            <div className="card__head__date__month">Language</div>
          </div>
        </div>
        <div className="card__text">
          <h2 className="card__text__title">Present continious</h2>
          <p className="card__text__content">
            Try to answer all questions correctly and get the highest score.
            Become a Present Continuous Expert
          </p>
          <Link className="card__text__link" to="#">
            Try test
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardEnglish;
