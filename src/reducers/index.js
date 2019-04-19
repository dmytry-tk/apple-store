const initialState = {
    phones: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PHONES_REQUESTED':
            return {
                books: [],
                loading: true,
                error: null
            }
        case 'PHONES_LOADED':
            return {
                phones: action.payload,
                loading: false,
                error: null
            };
        case 'BOOKS_ERROR':
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