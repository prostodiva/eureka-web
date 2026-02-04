import Navbar from "./Navbar.tsx";

function Header() {
    return(
        <div className="flex flex-row justify-between items-center w-full px-4 bg-gray-100">
            <Navbar />
        </div>
    );
}

export default Header;