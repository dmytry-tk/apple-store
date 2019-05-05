const updateProfile = (state, action) => {
    if (state === undefined) {
        return {
            profile: null,
            loading: false,
            error: false,
            isLogin: false,
        }
    }
    switch (action.type) {
        case 'FETCH_PROFILE_LOADED':
            return {
                profile: action.payload,
                isLogin: true,
                loading: false,
                error: null
            };
        case 'FETCH_PROFILE_ERROR':
            return {
                profile: null,
                isLogin: false,
                loading: false,
                error: "Email or password is incorrect."
            }
        case 'FETCH_PROFILE_REQUESTED':
            return {
                profile: null,
                isLogin: false,
                loading: true,
                error: null
            }
        default:
            return state.profileList;
    }
}

export {updateProfile}