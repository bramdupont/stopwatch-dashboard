import React, {Fragment, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Spinner from '../layout/Spinner';
import {getTimes} from "../../actions/time";
import TimeItem from './TimeItem';

const Times = ({getTimes, time: {times, loading}}) => {
    useEffect(() => {
        getTimes();
    }, [getTimes]);
    return loading ? <Spinner/> : (
        <Fragment>
            <h1 className="text-2xl font-bold font-primary">Times</h1>
            <table className="table-auto times">
                <thead>
                <tr>
                    <th>Naam</th>
                    <th>Tijd</th>
                </tr>
                </thead>
                <tbody>
                {times.map(time => (
                    <TimeItem key={time._id} time={time}/>
                ))}
                </tbody>
            </table>
        </Fragment>
    )
}

Times.propTypes = {
    getTimes: PropTypes.func.isRequired,
    time: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    time: state.time
})

export default connect(mapStateToProps, {getTimes})(Times);