import React, {Component} from 'react'
import {fetchDevices} from "../actions";
import {compose} from "redux";
import {withService} from "../components/hoc/with-service";
import {connect} from "react-redux";
import Catalog from "../components/catalog";
import ErrorIndicator from "../components/error-indicator";
import Spinner from "../components/spinner";

class CatalogContainer extends Component {

    // componentDidMount() {
    //     const { service } = this.props
    //     const data = service.getPhones();
    //
    //     this.props.phonesLoaded(data)
    // }
    componentDidMount() {
        this.props.fetchDevices()
    }

    render() {
        console.log("11111", this.props)
        const { phones, loading, error } = this.props

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <Catalog phones = {phones} />
    }
}
const mapStateToProps = ({ phones, loading, error }) => {
    return { phones, loading, error }
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
)(CatalogContainer)