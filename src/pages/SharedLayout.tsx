import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const SharedLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
