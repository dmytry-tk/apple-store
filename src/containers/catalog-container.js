import React, {Component} from 'react'
import {fetchDevices} from "../actions";
import {compose} from "redux";
import {withService} from "../components/hoc/with-service";
import {connect} from "react-redux";
import Catalog from "../components/catalog-directory/catalog";
import ErrorIndicator from "../components/error-indicator";
import Spinner from "../components/spinner";

class CatalogContainer extends Component {

    componentDidMount() {
        this.props.fetchDevices()
    }

    render() {
        const { devices, loading, error } = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <Catalog devices = {devices} />
    }
}
const mapStateToProps = ({ deviceList:{devices, loading, error} }) => {
    return { devices, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { service, deviceClass } = ownProps;
    return {
        fetchDevices: fetchDevices(service.getDevices(deviceClass), dispatch)
    }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CatalogContainer)