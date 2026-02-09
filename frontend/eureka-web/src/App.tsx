import Root from "./root/Root";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import GameplayPage from "./pages/GameplayPage.tsx";
import AboutUsPage from "./pages/AboutUsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import WhyUsPage from './pages/WhyUsPage.tsx';

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
        path: '/why',
        element: <WhyUsPage />,
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
  return (
    <RouterProvider router={router} />
  );
}

export default App;
