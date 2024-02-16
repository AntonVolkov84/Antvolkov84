import { NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useTranslation } from 'react-i18next';
import '../i18next';

const locales = {
  en: { title: 'English' },
  ru: { title: 'Русский' },
};

function Menu() {
  const { t, i18n } = useTranslation();

  const { setTheme } = useTheme();

  const handleClickRedTheme = () => {
    setTheme('red');
  };
  const handleClickGreenTheme = () => {
    setTheme('green');
  };

  return (
    <nav className="menu">
      <NavLink className="menu__item" to="." end>
        {t('menu.home')}
      </NavLink>
      <NavLink className="menu__item" to="about">
        {t('menu.about')}
      </NavLink>
      <NavLink className="menu__item" to="contacts">
        {t('menu.contacts')}
      </NavLink>
      <div className="theme">
        <button onClick={() => handleClickRedTheme()} className="theme__red">
          Red
        </button>
        <button
          onClick={() => handleClickGreenTheme()}
          className="theme__green"
        >
          Green
        </button>
        {Object.keys(locales).map((locale) => (
          <button
            className="languageBtn"
            key={locale}
            onClick={() => i18n.changeLanguage(locale)}
          >
            {locales[locale].title}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Menu;
