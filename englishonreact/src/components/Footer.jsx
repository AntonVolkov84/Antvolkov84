import { useTranslation } from 'react-i18next';

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div className="footer">
      <h1 className="footer__title">{t('footer.text')}</h1>
    </div>
  );
}

export default Footer;
