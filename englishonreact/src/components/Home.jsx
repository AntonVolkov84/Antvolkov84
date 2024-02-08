import Card from './Card';
import { data } from '../data';

const Home = () => {
  return (
    <div className="home">
      {data.map((card) => {
        return <Card key={card.forStyle} {...card} />;
      })}
    </div>
  );
};
export default Home;
