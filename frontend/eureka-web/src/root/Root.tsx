import { Outlet } from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
