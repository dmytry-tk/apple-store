
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

export {
  fetchDevices,
  fetchDevice
};