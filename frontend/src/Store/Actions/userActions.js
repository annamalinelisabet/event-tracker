import axios from '../../axios'
import actiontypes from '../actiontypes'
import jwt_decode from 'jwt-decode'

export const registerUser = user => {
    return async dispatch => {
        dispatch(loading())
        try {
            const res = await axios.post('users/register', user)
            if(res.status === 201) {
                dispatch(userSuccess(res.data.token, res.data.user._id))
            } else {
                throw new Error('Could not register a new user...')
            }
        } catch (err) {
            dispatch(userFailure(err.message))
        }
    }
}

export const loginUser = user => {
    return async dispatch => {
        dispatch(loading())
        try {
            const res = await axios.post('users/login', user)
            if(res.status === 200) {
                dispatch(userSuccess(res.data.token, res.data.user._id))
            } else {
                throw new Error('Could not login user...')
            }
        } catch (err) {
            dispatch(userFailure(err.message))
        }
    }
}

export const logoutUser = () => {
    return {
        type: actiontypes().user.logout
    }
}

export const checkUser = () => {
    return dispatch => {
        let token = localStorage.getItem('token')
        let userId = localStorage.getItem('userId')
        if(token) {
            if(jwt_decode(token).exp * 1000 > Date.now()) {
                dispatch(userSuccess(token, userId))
            } else {
                localStorage.removeItem('token')
                localStorage.removeItem('userId')
                dispatch(logoutUser())
            }
        }
    }
}

const loading = () => {
    return {
        type: actiontypes().user.loading
    }
}

const userFailure = err => {
    return {
        type: actiontypes().user.userFailure,
        payload: err
    }
}

const userSuccess = (token, userId) => {
    return {
        type: actiontypes().user.userSuccess,
        token: token,
        userId: userId
    }
}
