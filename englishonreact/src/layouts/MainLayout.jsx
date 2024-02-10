import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
