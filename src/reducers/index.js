

const initialState = {
    phones: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DEVICES_REQUESTED':
            return {
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_DEVICES_LOADED':
            return {
                phones: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_DEVICES_ERROR':
            return {
                phones: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
    return state;
}
export default reducer