const updateDeviceList = (state, action) => {
    if (state === undefined) {
        return {
            devices: [],
            loading: true,
            error: null,
            currentDevice: []
        }
    }
    switch (action.type) {
        case 'FETCH_DEVICES_REQUESTED':
            return {
                devices: [],
                currentDevice: [],
                loading: true,
                error: null
            }
        case 'FETCH_DEVICES_LOADED':
            return {
                devices: action.payload,
                currentDevice: [],
                loading: false,
                error: null
            };
        case 'FETCH_DEVICES_ERROR':
            return {
                devices: [],
                currentDevice: [],
                loading: false,
                error: action.payload
            }
        case 'FETCH_DEVICE_LOADED':
            return {
                devices: [],
                currentDevice: action.payload,
                loading: false,
                error: null
            };
        default:
            return state.deviceList;
    }
}

export {updateDeviceList}