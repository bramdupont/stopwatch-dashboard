import './App.css';
import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from "./components/layout/Auth/Register";
import Login from "./components/layout/Auth/Login";
import Navbar from "./components/layout/Navbar";
import Scoreboard from "./components/scoreboard/Scoreboard";
import Record from "./components/times/Record";
import Alert from "./components/layout/Alert";
import {Provider} from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import {loadUser} from "./actions/auth";
import Times from "./components/times/Scoreboard";
import PrivateRoute from "./components/routing/PrivateRoute";

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
                <div className="container mx-auto px-4 py-2 pt-8">
                    <Alert/>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/record" element={<Record/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/scoreboard" element={<Times/>}/>
                    </Routes>
                </div>
            </Router>
        </Provider>
    )
};

export default App;
