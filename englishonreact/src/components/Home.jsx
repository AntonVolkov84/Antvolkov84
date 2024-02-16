import Card from './Card';
import { data } from '../data';
import { dataEN } from '../dataEN';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  if (t('data') === 'data') {
    return (
      <div className="home">
        {data.map((card) => {
          return <Card key={card.forStyle} {...card} />;
        })}
      </div>
    );
  } else if (t('data') === 'dataEN') {
    return (
      <div className="home">
        {dataEN.map((card) => {
          return <Card key={card.forStyle} {...card} />;
        })}
      </div>
    );
  }
};
export default Home;
