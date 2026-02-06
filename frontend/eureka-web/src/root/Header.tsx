import Navbar from "../components/Navbar.tsx";

function Header() {
    return(
        <header className="flex flex-row justify-between items-center w-full px-4 bg-gray-100">
            <Navbar />
        </header>
    );
}

export default Header;