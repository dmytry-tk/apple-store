import React, {Component} from 'react'
import "./registration.sass"
import {fetchDevices} from "../../actions";
import {compose} from "redux";
import {withService} from "../hoc/with-service";
import connect from "react-redux/es/connect/connect";

class Registration extends Component {
    render() {
        return(
            <div></div>
        )
    }
}

const mapStateToProps = ({ deviceList:{devices, loading, error} }) => {
    return { devices, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { service, getDevice } = ownProps
    return {
        fetchDevices: fetchDevices(service[getDevice], dispatch)
    }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Registration)