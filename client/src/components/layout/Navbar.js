import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {logout} from '../../actions/auth';

const Navbar = ({auth: {isAuthenticated}}) => {

    const guestLinks = (
        <nav className="md:hidden flex bg-blue-500 py-4">
            <div className="container mx-auto px-4 flex items-center content-center">
                <div className="flex items-center flex-1">
                    <Link to="/login" className="pr-4">
                        <p className="text-md font-semibold font-primary text-white">Inloggen</p>
                    </Link>
                    <Link to="/register" className="pr-4">
                        <p className="text-md font-semibold font-primary text-white">Registreren</p>
                    </Link>
                </div>
            </div>
        </nav>
    );

    return (
        <Fragment>{isAuthenticated ? '' : guestLinks}</Fragment>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(Navbar);