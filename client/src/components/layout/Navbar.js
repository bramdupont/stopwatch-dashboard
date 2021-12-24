import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-emerald-400 p-4 mb-8">
            <div className="container mx-auto px-4 flex justify-between items-center content-center">
                <div>
                    <Link to="/">
                        <p className="text-xl font-bold font-primary text-white">Logo</p>
                    </Link>
                </div>
                <div className="flex items-center justify-end flex-1">
                    <Link to="/" className="px-2">
                        <p className="text-md font-semibold font-primary text-white">Scoreboard</p>
                    </Link>
                    <Link to="/record" className="px-2">
                        <p className="text-md font-semibold font-primary text-white">Timer</p>
                    </Link>
                    <Link to="/login" className="px-2">
                        <p className="text-md font-semibold font-primary text-white">Inloggen</p>
                    </Link>
                    <Link to="/register" className="px-2">
                        <p className="text-md font-semibold font-primary text-white">Registreren</p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;