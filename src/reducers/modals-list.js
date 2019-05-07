
const updateModals = (state, action) => {
    if (state === undefined) {
        return {}
    }
    switch (action.type) {
        case 'OPEN_MODAL':
            return {[action.payload]:true};
        case 'CLOSE_MODAL':
            return {};
        default:
            return state.modals;
    }
}

export { updateModals }