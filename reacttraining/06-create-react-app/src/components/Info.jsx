import './Info.css';
import style from './Info.module.css';

console.log(style);

function Info() {
  return (
    <div className={style.info}>
      <h1>Hello from the INFO component</h1>
      <button>Click me</button>
      <h2>Hedding from Info</h2>
      <button className={style.myOtherButton}>Hello beckgroungd</button>
      <h3 className={style.info__h}>Hello text h3</h3>
    </div>
  );
}
export default Info;
