import { createBrowserRouter } from 'react-router-dom';

import { MainPage } from 'pages/main';
import { SearchAdressPage } from 'pages/searchAdress';

import { baseLayout } from './layouts/baseLayout';
import { layoutWithSidebar } from './layouts/layoutWithSidebar';

export const appRouter = createBrowserRouter([
  // {
  //   element: baseLayout,
  //   errorElement: <div>error</div>,
  //   loader: () => {
  //     return <div>loading</div>;
  //     // return await featureToggleLoader(appStore.dispatch);
  //   },
  //   children: [
  //     {
  //       path: '/',
  //       element: <MainPage />,
  //     },
  //     {
  //       path: '/address',
  //       element: <SearchAdressPage />,
  //     },
  //   ],
  // },
  {
    element: layoutWithSidebar,
    errorElement: <div>error</div>,
    loader: () => {
      return <div>loading</div>;
      // return await featureToggleLoader(appStore.dispatch);
    },
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/address',
        element: <SearchAdressPage />,
      },
    ],
  },
]);
