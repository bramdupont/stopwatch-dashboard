import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import { setAlert } from '../../../actions/alert';
import PropTypes from "prop-types";

const Register = ({ setAlert }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Wachtwoorden komen niet overeen', 'danger', 3000);
        } else {
            console.log('SUCCESS')
        }
    }

    return (
        <div className="flex flex-col justify-center items-start md:items-center content-center">
            <h1 className="text-2xl font-bold font-primary mb-4">Registreren</h1>
            <form onSubmit={e => onSubmit(e)} method="POST" className="my-4 w-full">
                <div>
                    <div className="mb-4">
                        <label htmlFor="name" className="sr-only">
                            Naam
                        </label>
                        <input type="text"
                               id="name"
                               name="name"
                               autoComplete="name"
                               required
                               value={name}
                               onChange={e => onChange(e)}
                               className="appearance-none rounded-none relative block w-full md:w-4/12 md:mx-auto px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                               placeholder="Naam"
                        />
                    </div>
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
                    <div className="mb-4">
                        <label htmlFor="password-confirm" className="sr-only">
                            Wachtwoord bevestigen
                        </label>
                        <input type="password" id="password-confirm" name="password2" autoComplete="password"
                               required
                               value={password2}
                               onChange={e => onChange(e)}
                               className="appearance-none rounded-none relative block w-full md:w-4/12 md:mx-auto px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                               placeholder="Wachtwoord bevestigen"
                        />
                    </div>
                    <div className="mb-4 text-center pt-2">
                        <button type="submit" value="register"
                                className="bg-emerald-400 p-2 px-4 text-white font-bold hover:bg-blue-500 transition ease-in-out delay-150 ">
                            Registreren
                        </button>
                    </div>
                    <div className="mb-4 text-center pt-2">
                        <p className="text-sm text-gray-500">Heb je al een account? <Link className="text-blue-500"
                                                                                          to="/login">Log in</Link></p>
                    </div>
                </div>
            </form>
        </div>
    )
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert })(Register);