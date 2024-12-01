import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="fixed top-0 left-0 w-full h-16 bg-green-600 text-white shadow-lg z-50 flex items-center px-6 transition-all duration-300 ease-in-out">
            <h1 className="text-2xl font-bold hover:text-yellow-300">
                <Link to="/">Quranim App</Link>
            </h1>
            <div className="ml-auto flex items-center space-x-6 py-10 lg:space-x-8">
                <nav
                    className={`lg:flex space-x-6 lg:space-x-8 transition-transform duration-300 ease-in-out ${
                        isOpen ? "flex-col absolute top-16 left-0 w-full bg-green-600 lg:flex-row" : "hidden lg:flex"
                    }`}
                >
                    <Link
                        to="/surahs"
                        className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
                    >
                        Suralar
                    </Link>
                    <Link
                        to="/times"
                        className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
                    >
                        Namoz vaqtlari
                    </Link>
                </nav>

                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-white text-3xl focus:outline-none"
                >
                    {isOpen ? (
                        <span className="text-3xl">X</span>
                    ) : (
                        <span className="text-3xl">☰</span>
                    )}
                </button>
            </div>
        </div>
    );
}
