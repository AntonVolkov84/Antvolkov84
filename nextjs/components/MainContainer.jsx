import Head from 'next/head';
import A from './A';
function MainContainer({ children, keywords }) {
  return (
    <>
      <Head>
        <meta keywords={'volkov, anton, next.js, ' + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <div className="navbar">
        <A href={'/'} text={'Главная'} />
        <A href={'/users'} text={'Пользователи'} />
      </div>
      <div>{children}</div>
    </>
  );
}

export default MainContainer;
