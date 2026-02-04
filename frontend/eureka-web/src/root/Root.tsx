import { Outlet } from 'react-router-dom';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

function Root() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow" id="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Root;