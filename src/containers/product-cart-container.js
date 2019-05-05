import React, {Component} from 'react'
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import ProductCart from "../components/product-cart";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";
import {withService} from "../components/hoc/with-service";
import {fetchDevice, addDeviceToCart, openModal} from "../actions";

class ProductCartContainer extends Component{

    componentDidMount() {
        this.props.fetchDevice()
    };

    checkCart = (id) => {
        const {cartItems:items} = this.props;
        const res = items.findIndex(({_id}) => _id === id);
        return res !== -1
    };

    render(){
        const { currentDevice, loading, error, addDeviceToCart, isLogin, openModal} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <ProductCart
            device = {currentDevice}
            addedToCart={this.checkCart(currentDevice._id)}
            isLogin={isLogin}
            openModal={(modal) => openModal(modal)}
            addDeviceToCart={() => addDeviceToCart(currentDevice)}/>
    }

}

const mapStateToProps = ({ deviceList:{currentDevice, loading, error}, cartList:{cartItems}, profileList:{isLogin} }) => {
    return {
        currentDevice,
        loading,
        error,
        cartItems,
        isLogin
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { service, deviceClass, deviceId } = ownProps;
    return {
        fetchDevice: fetchDevice(service.getDevice(deviceClass, deviceId),  dispatch),
        addDeviceToCart: (device) => dispatch(addDeviceToCart(device)),
        openModal: (modal) => dispatch(openModal(modal))
    }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ProductCartContainer)
