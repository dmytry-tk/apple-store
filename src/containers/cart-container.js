import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import React, {Component} from "react";
import Cart from "../components/cart-directory/cart";
import {withService} from "../components/hoc/with-service";
import {allDevicesRemovedFromCart, deviceAddedToCart, deviceRemovedFromCart} from "../actions";

class CartContainer extends Component {

    render() {
        const {cartItems, onIncrease, onDelete, onDecrease } = this.props
        return <Cart
            cartList={cartItems}
            onIncrease={onIncrease}
            onDelete={onDelete}
            onDecrease={onDecrease}/>
    }
}

const mapStateToProps = ({ cartList:{cartItems} }) => {
    return { cartItems }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncrease: deviceAddedToCart,
        onDecrease: deviceRemovedFromCart,
        onDelete: allDevicesRemovedFromCart,
    }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CartContainer)