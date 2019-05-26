
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

export const addCurrentUser = (user) => {
    return{
        type: 'ADD_CURRENT_USER',
        payload: user
    }
};
export const addDeviceToCart = (device) => {
    return{
        type: 'ADD_DEVICE_TO_CART',
        payload: device
    }
}
export const deviceIncreaseCount = (_id) => {
    return {
        type: 'DEVICE_INCREASE_COUNT',
        payload: _id
    }
};

export const deviceDecreaseCount = (_id) => {
    return {
        type: 'DEVICE_DECREASE_COUNT',
        payload: _id
    }
};

export const deviceRemovedFromCart = (_id) => {
    return {
        type: 'DEVICE_REMOVED_FROM_CART',
        payload: _id
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

export const fetchHotSales = (fetchHotSales, dispatch) => () => {
    dispatch(hotSalesRequested())
    fetchHotSales
        .then((data) => dispatch(hotSalesLoaded(data)))
        .catch((err) => dispatch(hotSaleError(err)))
}

const hotSaleError = (newDevices) => {
    return {
        type: 'FETCH_DEVICES_LOADED',
        payload: newDevices
    }
}

const hotSalesLoaded = (newDevice) => {
    return {
        type: 'FETCH_DEVICE_LOADED',
        payload: newDevice
    }
}

const hotSalesRequested = () => {
    return {
        type: 'FETCH_DEVICES_REQUESTED'
    }
}



