import { Outlet } from 'react-router-dom';
import Header from './Header.tsx';
import FooterSection from '../features/footer/FooterSection.tsx';

function Root() {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="grow overflow-hidden" id="main-content">
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
}

export default Root;
