import Root from "./root/Root";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage.tsx";
import AboutUsPage from "./pages/AboutUsPage.tsx";
import SupportPage from "./pages/SupportPage.tsx";

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
                path: '/store',
                element: <StorePage />
            },
            {
                path: '/about',
                element: <AboutUsPage />
            },
            {
                path: '/support',
                element: <SupportPage />
            }
        ],
    },
] as RouteObject[]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
