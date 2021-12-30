import React, {Fragment, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Spinner from '../layout/Spinner';
import {getTimes} from "../../actions/time";
import TimeItem from './TimeItem';

const Scoreboard = ({getTimes, time: {times, loading}}) => {
    useEffect(() => {
        getTimes();
    }, [getTimes]);
    return loading ? <Spinner/> : (
        <Fragment>
            <h1 className="text-2xl font-bold font-primary mb-8">Scoreboard</h1>
            <div className="overflow-hidden border-b border-gray-200">
                <table className="table-auto times min-w-full divide-y divide-gray-200 bg-blue-50">
                    <thead className="py-2">
                    <tr>
                        <th className="p-2 mb-2 text-left">#</th>
                        <th className="p-2 mb-2 text-left">Tijd</th>
                        <th className="p-2 mb-2 text-left">Naam</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                    {times.map((time, index) => (
                        <TimeItem key={time._id} index={index} time={time}/>
                    ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

Scoreboard.propTypes = {
    getTimes: PropTypes.func.isRequired,
    time: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    time: state.time
})

export default connect(mapStateToProps, {getTimes})(Scoreboard);