import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addTime} from "../../actions/time";
import {Link} from "react-router-dom";


const TimeForm = ({
                      addTime,
                  }) => {

    let [timer, setTimer] = useState(0);
    let [time] = useState('')
    let [running, setRunning] = useState(false);
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTimer((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);

    }, [running]);

    time = ("0" + Math.floor((timer / 60000) % 60)).slice(-2) + ":" + ("0" + Math.floor((timer / 1000) % 60)).slice(-2) + ":" + ("0" + ((timer / 10) % 100)).slice(-2);
    return (
        <div className="recorder my-4 flex justify-start items-center content-center flex-col">
            <div className="py-8 flex flex-row items-center justify-between">
                <span className="digit p-2 px-0 text-5xl text-emerald-400">{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}</span>
                <span className="p-2 px-0 text-5xl text-emerald-400">:</span>
                <span className="digit p-2 px-0 text-5xl text-emerald-400">{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span>
                <span className="p-2 px-0 text-5xl text-emerald-400">:</span>
                <span className="digit p-2 px-0 text-5xl text-emerald-400">{("0" + ((timer / 10) % 100)).slice(-2)}</span>
            </div>
                <button className="p-2 py-4 bg-emerald-400 my-3 block w-full text-center text-white text-xl font-bold" onClick={() => setRunning(true)}>Start</button>
                <button className="p-2 py-4 bg-red-600 my-3 block w-full text-center text-white text-xl font-bold" onClick={() => setRunning(false)}>Stop</button>
            <div className="flex justify-between mt-8">
                <button className="mr-4 text-blue-500 text-lg" onClick={() => addTime({time})}>Tijd opslaan</button>
                <button className="mr-4 text-red-600 text-lg" onClick={() => setTimer(0)}>Opnieuw</button>
            </div>

            <p className="bottom-link text-sm text-gray-500 text-center">Terug naar
                <Link className="text-blue-500" to="/scoreboard"> het scoreboard</Link>
            </p>
        </div>
    )
}


TimeForm.propTypes = {
    addTime: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {addTime})(TimeForm);