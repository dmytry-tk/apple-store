import {updateDeviceList} from "./device-list";
import {updateCart} from "./cart-list";

const reducer = (state, action) => {
    return {
        deviceList: updateDeviceList(state, action),
        cartList: updateCart(state, action),
    }
}
export default reducer