import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <div className="flex items-center justify-between flex-1">
            <Link to="/times" className="pr-4">
                <p className="text-md font-semibold font-primary text-white">Scoreboard</p>
            </Link>
            <Link to="/record" className="pr-4">
                <p className="text-md font-semibold font-primary text-white">Timer</p>
            </Link>
            <Link onClick={logout} to="#!" className="pr-4">
                <p className="text-md font-semibold font-primary text-white">Logout</p>
            </Link>
        </div>
    );

    const guestLinks = (
        <div className="flex items-center flex-1">
            <Link to="/login" className="pr-4">
                <p className="text-md font-semibold font-primary text-white">Inloggen</p>
            </Link>
            <Link to="/register" className="pr-4">
                <p className="text-md font-semibold font-primary text-white">Registreren</p>
            </Link>
        </div>
    );

    return (
        <nav className="bg-blue-500 py-4 absolute w-full left-0 bottom-0">
            <div className="container mx-auto px-4 flex items-center content-center">
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