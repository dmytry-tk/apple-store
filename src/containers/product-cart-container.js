import React, {Component} from 'react'
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import ProductCart from "../components/product-cart";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";
import {withService} from "../components/hoc/with-service";
import {fetchDevice, addDeviceToCart} from "../actions";

class ProductCartContainer extends Component{

    componentDidMount() {
        this.props.fetchDevice()
    }

    render(){
        const { currentDevice, loading, error, addDeviceToCart} = this.props

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <ProductCart
            device = {currentDevice}
            addDeviceToCart={() => addDeviceToCart(currentDevice)}/>
    }

}

const mapStateToProps = ({ deviceList:{currentDevice, loading, error} }) => {
    return { currentDevice, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { service, deviceClass, deviceId } = ownProps
    return {
        fetchDevice: fetchDevice(service.getDevice, deviceClass, deviceId, dispatch),
        addDeviceToCart: (device) => dispatch(addDeviceToCart(device))
    }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ProductCartContainer)
