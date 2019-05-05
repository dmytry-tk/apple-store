
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

export const fetchDevices = (getDevices, dispatch) => () => {
    dispatch(devicesRequested())
    getDevices
        .then((data) => dispatch(devicesLoaded(data)))
        .catch((err) => dispatch(devicesError(err)))
}

export const fetchDevice = (getDevice, dispatch) => () => {
    dispatch(devicesRequested())
    getDevice
        .then((data) => dispatch(deviceLoaded(data)))
        .catch((err) => dispatch(devicesError(err)))
};

const userLoaded = (user) => {
    return {
        type: 'FETCH_PROFILE_LOADED',
        payload: user
    }
}

const userRequested = () => {
    return {
        type: 'FETCH_PROFILE_REQUESTED'
    }
}

const userError = (error) => {
    return{
        type: 'FETCH_PROFILE_ERROR',
        payload: error
    }
}

export const fetchProfile = (getUser, dispatch) => {
    dispatch(userRequested());
    getUser
        .then((data) => dispatch(userLoaded(data)))
        .catch((err) => dispatch(userError(err)))
};

export const addDeviceToCart = (device) => {
    return{
        type: 'ADD_DEVICE_TO_CART',
        payload: device
    }
}
export const deviceIncreaseCount = (deviceId) => {
    return {
        type: 'DEVICE_INCREASE_COUNT',
        payload: deviceId
    }
};

export const deviceDecreaseCount = (deviceId) => {
    return {
        type: 'DEVICE_DECREASE_COUNT',
        payload: deviceId
    }
};

export const deviceRemovedFromCart = (deviceId) => {
    return {
        type: 'DEVICE_REMOVED_FROM_CART',
        payload: deviceId
    }
};

export const clearCart = () => {
    return {
        type: 'CLEAR_CART',
    }
};

export const closeModal = () => {
    return {
        type: 'CLOSE_MODAL',
    }
};

export const openModal = (modal) => {
    return {
        type: 'OPEN_MODAL',
        payload: modal
    }
};