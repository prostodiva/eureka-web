import Root from './root/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage.tsx';
import GameplayPage from './pages/gameplayPage/GameplayPage.tsx';
import AboutUsPage from './pages/aboutUsPage/AboutUsPage.tsx';
import ContactPage from './pages/contactPage/ContactPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/gameplay',
        element: <GameplayPage />,
      },
      {
        path: '/about',
        element: <AboutUsPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
] as RouteObject[]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
