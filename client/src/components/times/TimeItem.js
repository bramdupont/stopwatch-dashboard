import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from "react-redux";


const TimeItem = ({auth, time: {_id, time, name}}) => (
    <tr>
        <td>{name}</td>
        <td>{time}</td>
    </tr>
)


TimeItem.propTypes = {
    time: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(TimeItem);