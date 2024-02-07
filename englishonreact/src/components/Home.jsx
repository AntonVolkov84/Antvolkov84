import { Outlet } from 'react-router-dom';
import Menu from './Menu';
import CardEnglish from './CardEnglish';
import CardMath from './CardMath';

const Home = () => {
  return (
    <div className="home">
      <CardEnglish />
      <CardMath />
    </div>
  );
};
export default Home;
