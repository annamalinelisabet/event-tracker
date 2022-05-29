import actiontypes from "../actiontypes"

const initState = {
    token: null,
    userId: null,
    loading: false,
    error: null
}

const userReducer = (state = initState, action) => {
    switch(action.type) {

        case actiontypes().user.loading:
            return {
                ...state,
                loading: true
            }
        
        case actiontypes().user.userFailure:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case actiontypes().user.userSuccess:
            localStorage.setItem('token', action.token)
            localStorage.setItem('userId', action.userId)
            return {
                ...state,
                loading: false,
                error: null,
                userId: action.userId,
                token: action.token
            }
        case actiontypes().user.logout:
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            return {
                ...initState
            }

        default:
            return state
    }
}

export default userReducer;