import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from "./components/layout/Auth/Register";
import Login from "./components/layout/Auth/Login";
import Navbar from "./components/layout/Navbar";
import Scoreboard from "./components/layout/Scoreboard";
import Record from "./components/layout/Record";
import Alert from "./components/layout/Alert";
import {Provider} from "react-redux";
import store from "./store";


const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar/>
                <div className="container mx-auto px-4 py-2">
                    <Alert/>
                    <Routes>
                        <Route path="/" element={<Scoreboard/>}/>
                        <Route path="/record" element={<Record/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Routes>
                </div>
            </Router>
        </Provider>
    )
};

export default App;
