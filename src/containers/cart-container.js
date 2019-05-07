import {compose} from "redux";
import {connect} from "react-redux";
import React, {Component} from "react";
import Cart from "../components/cart-directory/cart";
import {withService} from "../components/hoc/with-service";
import {
    deviceDecreaseCount,
    deviceIncreaseCount,
    deviceRemovedFromCart,
    clearCart
} from "../actions";

class CartContainer extends Component {

    render() {
        const {cartItems, onIncrease, onDelete, onDecrease, total, clearCart } = this.props;
        return <Cart
            cartList={cartItems}
            total={total}
            onIncrease={onIncrease}
            onDelete={onDelete}
            clearCart={clearCart}
            onDecrease={onDecrease}/>
    }
}

const mapStateToProps = ({ cartList:{cartItems, orderTotal } }) => {
    return {
        cartItems,
        total:orderTotal,
    }
}

const mapDispatchToProps = {
    onIncrease: deviceIncreaseCount,
    onDecrease: deviceDecreaseCount,
    onDelete: deviceRemovedFromCart,
    clearCart: clearCart,
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CartContainer)