import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts';
import { MainPage } from '../pages';

export const AppRouter = () =>
  createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <p>Error</p>,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
      ],
    },
  ]);
