import { Link } from 'react-router-dom';

function Card(props) {
  console.log(props);
  return (
    <div className="wrapper">
      <div className={`card ${props.forStyle}`}>
        <div className="card__head">
          <div className="card__head__back"></div>
          <div className="card__head__date">
            <div className="card__head__date__day">{props.lesson}</div>
            <div className="card__head__date__month">{props.subLesson}</div>
          </div>
        </div>
        <div className="card__text">
          <h2 className="card__text__title">{props.title}</h2>
          <p className="card__text__content">{props.text}</p>
          <Link className="card__text__link" to={props.forStyle}>
            {props.start}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
