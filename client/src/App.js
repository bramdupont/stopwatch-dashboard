import './App.css';
import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from "./components/layout/Auth/Register";
import Login from "./components/layout/Auth/Login";
import Navbar from "./components/layout/Navbar";
import Record from "./components/times/Record";
import Alert from "./components/layout/Alert";
import {Provider} from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import {loadUser} from "./actions/auth";
import Times from "./components/times/Scoreboard";
import packageJson from '../package.json';


if (localStorage.token) {
    setAuthToken(localStorage.token);
}


const App = () => {
    useEffect(() => {
       store.dispatch(loadUser());
    }, []);
    return (
        <Provider store={store}>
            <Router>
                <Navbar/>
                <div className="container mx-auto px-4 py-2 pt-4">
                    <Alert/>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/record" element={<Record/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/scoreboard" element={<Times/>}/>
                    </Routes>
                </div>
                <p className="badge text-xs absolute left-25 w-6/12 text-center text-gray-400">V{packageJson.version} - <a className="hover:text-blue-500 active:text-blue-500"
                    href="https://dupontwebdesign.notion.site/Changelog-f9286309d36349e7ba2918bb35de3145" rel="noreferrer" target="_blank">Changelog</a></p>

            </Router>
        </Provider>
    )
};

export default App;
