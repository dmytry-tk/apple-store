import {updateDeviceList} from "./device-list";
import {updateCart} from "./cart-list";
import {updateModals} from "./modals-list";
import {updateProfile} from "./profile";

const reducer = (state, action) => {
    return {
        deviceList: updateDeviceList(state, action),
        cartList: updateCart(state, action),
        profileList: updateProfile(state, action),
        modals: updateModals(state, action)
    }
}
export default reducer