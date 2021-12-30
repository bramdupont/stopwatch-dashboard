import React, {useState} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addTime} from "../../actions/time";


const TimeForm = ({addTime}) => {
    let [time, setTime] = useState('');

    return (
        <div className="post-form">
            <div className="bg-primary p">
            </div>
            <form className="form my-1" onSubmit={e => {
                e.preventDefault();
                addTime({time});
                setTime('');
            }}>
                <input type="text" name="time" value={time} onChange={e => setTime(e.target.value)}/>
                {/*<Stopwatch/>*/}
                <input type="submit" className="btn btn-dark my-1" value="Submit"/>
            </form>
        </div>
    )
}


TimeForm.propTypes = {
    addTime: PropTypes.func.isRequired
}

export default connect(null, {addTime})(TimeForm);