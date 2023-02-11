import Nav from './Nav';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default SharedLayout;
