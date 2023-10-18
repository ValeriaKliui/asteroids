import { StrictMode, type FC } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from '@constants/styles/global';
import { MainPage } from '@pages/MainPage';
import { Error } from '@components/Error';
import ErrorBoundary from '@utils/ErrorBoundary/ErrorBoundary';
import { Header } from '@components/Header';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

const BasicLayout: FC = () => (
  <ErrorBoundary fallback={<Error text="Something went wrong" />}>
    <Header />
    <Outlet />
  </ErrorBoundary>
);

const router = createHashRouter([
  {
    element: <BasicLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>,
);
