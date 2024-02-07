import { Link } from 'react-router-dom';

function CardMath() {
  return (
    <div className="wrapper">
      <div className="card__math">
        <div className="card__head">
          <div className="card__head__back"></div>
          <div className="card__head__date">
            <div className="card__head__date__day">Логические</div>
            <div className="card__head__date__month">задачи</div>
          </div>
        </div>
        <div className="card__text">
          <h2 className="card__text__title">Скороcть, время, расстояние</h2>
          <p className="card__text__content">
            Найди все неизвестные в новых задачах, получи высший уровень
            мастерства в нахождении правильных решений. Готов к математической
            прожарке?
          </p>
          <Link className="card__text__link" to="#">
            Решать задачи
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardMath;
