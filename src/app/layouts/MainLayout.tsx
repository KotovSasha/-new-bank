import { Outlet } from 'react-router-dom';
import { FC } from 'react';
import { Header } from '../../widgets';

export const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
