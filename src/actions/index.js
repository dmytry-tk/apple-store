
const devicesLoaded = (newDevices) => {
    return {
        type: 'FETCH_DEVICES_LOADED',
        payload: newDevices
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

const fetchDevices = (getDevice, dispatch) => () => {
    dispatch(devicesRequested())
    getDevice()
        .then((data) => dispatch(devicesLoaded(data)))
        .catch((err) => dispatch(devicesError(err)))
}

export {
  fetchDevices,
};