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
import {Redirect} from "react-router-dom";

class CartContainer extends Component {

    state = {
        error: false,
        success: false
    };

    makeOrder = () => {
        const {cartList, service:{postOrder}, profile } = this.props;
        const body = {
            cartList,
            userId: profile._id
        };
        postOrder(body)
            .then(() => {
                this.setState({
                    success: true,
                    error: false,
                })
            })
            .catch((error) => {
                console.log("error", error)
            })
    };

    render() {
        const {cartList, onIncrease, onDelete, onDecrease, clearCart } = this.props;
        if( this.state.success ) {
            clearCart();
            return (
                <div>
                    <Redirect to = '/thank-page'/>
                </div>
            )
        }
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
    connect(mapStateToProps, mapDispatchToProps)
)(CartContainer)