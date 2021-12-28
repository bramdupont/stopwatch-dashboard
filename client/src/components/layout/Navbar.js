import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <div className="flex items-center justify-end flex-1">
            <Link to="/" className="px-2">
                <p className="text-md font-semibold font-primary text-white">Scoreboard</p>
            </Link>
            <Link to="/times" className="px-2">
                <p className="text-md font-semibold font-primary text-white">Times</p>
            </Link>
            <Link to="/record" className="px-2">
                <p className="text-md font-semibold font-primary text-white">Timer</p>
            </Link>
            <Link onClick={logout} to="#!" className="px-2">
                <p className="text-md font-semibold font-primary text-white">Logout</p>
            </Link>
        </div>
    );

    const guestLinks = (
        <div className="flex items-center justify-end flex-1">
            <Link to="/login" className="px-2">
                <p className="text-md font-semibold font-primary text-white">Inloggen</p>
            </Link>
            <Link to="/register" className="px-2">
                <p className="text-md font-semibold font-primary text-white">Registreren</p>
            </Link>
        </div>
    );

    return (
        <nav className="bg-emerald-400 p-4 mb-8">
            <div className="container mx-auto px-4 flex justify-between items-center content-center">
                <div>
                    <Link to="/">
                        <p className="text-xl font-bold font-primary text-white">Logo</p>
                    </Link>
                </div>
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);