import {updateDeviceList} from "./device-list";

const reducer = (state, action) => {
    return {
        deviceList: updateDeviceList(state, action)
    }
}
export default reducer