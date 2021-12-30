import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";


const TimeItem = ({auth, index, time: {_id, time, name}}) => (

    <tr className="my-4 bg-white">
        <td className="p-2 text-emerald-400 text-3xl font-bold">{index+1}</td>
        <td className="p-2 text-lg font-bold">{time}</td>
        <td className="p-2">{name}</td>
    </tr>
)

TimeItem.propTypes = {
    time: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(TimeItem);