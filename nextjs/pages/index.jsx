import Head from 'next/head';
import A from '../components/A';
import MainContainer from '../components/MainContainer';

function index() {
  return (
    <MainContainer keywords={'main page'}>
      <div>
        <h1>Hello Anton Volkov!</h1>
        <h2>Test Next.js</h2>
      </div>
    </MainContainer>
  );
}

export default index;
