import React, { Component } from 'react'
import './catalog.sass'
import {connect} from "react-redux";
import CatalogItem from "../catalog-item";
import {withService} from "../hoc/with-service";
import {phonesLoaded, phonesRequested, phonesError} from "../../actions";
import { compose } from "redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class Catalog extends Component {

    // componentDidMount() {
    //     const { service } = this.props
    //     const data = service.getPhones();
    //
    //     this.props.phonesLoaded(data)
    // }
    componentDidMount() {
        const {
            service,
            phonesLoaded,
            phonesRequested,
            phonesError} = this.props
        phonesRequested()
        service.getPhones()
            .then((data) => phonesLoaded(data))
            .catch((err) => phonesError(err))
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
        return(
            <div className = "catalog">
                {
                    phones.map((phone) => {
                        return (
                            <CatalogItem
                                phone = {phone}/>
                        )
                    })
                }
            </div>

        )
    }
}
const mapStateToProps = ({ phones, loading, error }) => {
    return { phones, loading, error }
}

const mapDispatchToProps = {
    phonesLoaded,
    phonesRequested,
    phonesError
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Catalog)
