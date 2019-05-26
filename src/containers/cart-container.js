import {compose} from "redux";
import {connect} from "react-redux";
import React, {Component} from "react";
import Cart from "../components/cart-directory/cart";
import {withService} from "../components/hoc/with-service";
import {
    deviceDecreaseCount,
    deviceIncreaseCount,
    deviceRemovedFromCart,
    clearCart,
} from "../actions";
import {withRouter} from "react-router-dom";

class CartContainer extends Component {

    state = {
        error: false,
        success: false
    };

    makeOrder = () => {
        const {cartList, service:{postOrder}, profile, clearCart } = this.props;
        const body = {
            cartList,
            userId: profile._id
        };
        postOrder(body)
            .then(() => {
                clearCart();
                this.props.history.push('/thank-page');
            })
            .catch((error) => {
                console.log("error", error)
            })
    };

    render() {
        const {cartList, onIncrease, onDelete, onDecrease, clearCart } = this.props;
        return <Cart
            cartList={cartList}
            onIncrease={onIncrease}
            onDelete={onDelete}
            clearCart={clearCart}
            makeOrder={this.makeOrder}
            onDecrease={onDecrease}/>
    }
}

const mapStateToProps = ({ cartList, profileList }) => {
    return {
        cartList,
        profile: profileList.profile,
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
    connect(mapStateToProps, mapDispatchToProps),
)(withRouter(CartContainer))