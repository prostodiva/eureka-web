import Root from './root/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import HomePage from './pages/homePage';
import GameplayPage from './pages/gameplayPage';
import AboutUsPage from './pages/aboutUsPage';
import ContactPage from './pages/contactPage';

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
