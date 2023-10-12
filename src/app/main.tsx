import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { AppRouter } from './appRouter.tsx';
import { CurrencyProvider } from '../shared/context/currencyContext/CurrencyContext.tsx';
import { setupStore } from './appStore.ts';
import '../shared/styles/global.scss';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <CurrencyProvider>
        <RouterProvider router={AppRouter()} />
      </CurrencyProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
