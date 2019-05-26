import React, { Component } from 'react'
import {addDeviceToCart, fetchDevice, fetchDevices, fetchHotSales, openModal} from "../actions";
import {compose} from "redux";
import {withService} from "../components/hoc/with-service";
import {connect} from "react-redux";
import {HotSales} from "../components/home-pade-directory/hot-sales/hot-sales";

class HotSalesContainer extends Component{

    componentDidMount() {
        this.props.fetchHotSales()
    }

    render(){
        return(
            <HotSales  items = {this.props.items}/>
        )
    }
}

const mapStateToProps = ({ hotSales }) => {
    return {
        items: hotSales
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { service } = ownProps;
    return {
        fetchHotSales: fetchHotSales(service.fetchHotSales(),  dispatch),
    }
};

HotSalesContainer.defaultProps = {
    items: []
}

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(HotSalesContainer)