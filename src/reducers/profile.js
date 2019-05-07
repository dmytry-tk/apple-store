const updateProfile = (state, action) => {
    if (state === undefined) {
        return {
            profile: null,
            isLogin: false,
        }
    }
    switch (action.type) {
        case 'ADD_CURRENT_USER':
            return {
                profile: action.payload,
                isLogin: true,
            };
        default:
            return state.profileList;
    }
}

export {updateProfile}