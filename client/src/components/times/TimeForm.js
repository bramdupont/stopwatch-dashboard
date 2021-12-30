import React, {useState} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addTime} from "../../actions/time";
import {useNavigate} from "react-router-dom";


const TimeForm = ({
    addTime,
    auth
}) => {
    let [time, setTime] = useState('');
    let navigate = useNavigate();
    let user_id = auth.user._id;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                addTime({time, user_id});
                setTime('');
                navigate('/scoreboard');
            }}>
                <input
                    className="border-t-0 border-r-0 mt-4 mb-12 border-l-0 border-b-2 border-blue-500 w-full bg-transparant"
                    type="text" placeholder="1,2s" name="time" value={time} onChange={e => setTime(e.target.value)}/>
                <input className="p-4 bg-emerald-400 mt-12 block w-full text-white text-xl font-bold uppercase"
                       type="submit" value="Submit"/>
            </form>
        </div>
    )
}


TimeForm.propTypes = {
    addTime: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {addTime})(TimeForm);