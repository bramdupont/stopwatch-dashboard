import React, {useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {login} from "../../../actions/auth";

const Login = ({login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const {email, password} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    }

    //Redirect if logged in
    if(isAuthenticated) {
        return <Navigate to="/times" />
     }

    return (
        <div className="flex flex-col justify-center items-start md:items-center content-center">
            <h1 className="text-2xl font-bold font-primary mb-4">Login</h1>
            <form onSubmit={e => onSubmit(e)} method="POST" className="my-4 w-full">
                <div>
                    <div className="mb-4">
                        <label htmlFor="email-address" className="sr-only">
                            E-mailadres
                        </label>
                        <input type="email" id="email-address" name="email" autoComplete="email" required
                               value={email}
                               onChange={e => onChange(e)}
                               className="appearance-none rounded-none relative block w-full md:w-4/12 md:mx-auto px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                               placeholder="E-mailadres"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="sr-only">
                            Wachtwoord
                        </label>
                        <input type="password" id="password" name="password" autoComplete="password" required
                               value={password}
                               onChange={e => onChange(e)}
                               className="appearance-none rounded-none relative block w-full md:w-4/12 md:mx-auto px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                               placeholder="Wachtwoord"
                        />
                    </div>
                    <div className="mb-4 text-center pt-2">
                        <button type="submit" value="login"
                                className="bg-emerald-400 p-2 px-4 text-white font-bold hover:bg-blue-500 transition ease-in-out delay-150 ">
                            Inloggen
                        </button>
                    </div>
                    <div className="mb-4 text-center pt-2">
                        <p className="text-sm text-gray-500">Heb je nog geen account?
                            <Link className="text-blue-500" to="/register">Registreer</Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(Login);