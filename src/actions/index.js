
const devicesLoaded = (newDevices) => {
    return {
        type: 'FETCH_DEVICES_LOADED',
        payload: newDevices
    }
}

const deviceLoaded = (newDevice) => {
    return {
        type: 'FETCH_DEVICE_LOADED',
        payload: newDevice
    }
}

const devicesRequested = () => {
    return {
        type: 'FETCH_DEVICES_REQUESTED'
    }
}

const devicesError = (error) => {
    return{
        type: 'FETCH_DEVICES_ERROR',
        payload: error
    }
}

const fetchDevices = (getDevices, dispatch) => () => {
    dispatch(devicesRequested())
    getDevices()
        .then((data) => dispatch(devicesLoaded(data)))
        .catch((err) => dispatch(devicesError(err)))
}

const fetchDevice = (getDevice, deviceClass, deviceId, dispatch) => () => {
    dispatch(devicesRequested())
    getDevice(deviceClass, deviceId)
        .then((data) => dispatch(deviceLoaded(data)))
        .catch((err) => dispatch(devicesError(err)))
}

const addDeviceToCart = (device) => {
    return{
        type: 'ADD_DEVICE_TO_CART',
        payload: device
    }
}
export const deviceAddedToCart = (deviceId) => {
    console.log("111111")
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: deviceId
    }
};

export const allDevicesRemovedFromCart = (deviceId) => {
    console.log("111111")
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: deviceId
    }
};

export const deviceRemovedFromCart = (deviceId) => {
    console.log("111111")
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: deviceId
    }
};


export {
  fetchDevices,
  fetchDevice,
  addDeviceToCart
};