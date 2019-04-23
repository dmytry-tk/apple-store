import {updateDeviceList} from "./device-list";
import {updateCartList} from "./cart-list";

const reducer = (state, action) => {
    return {
        deviceList: updateDeviceList(state, action),
        cartList: updateCartList(state, action),
    }
}
export default reducer