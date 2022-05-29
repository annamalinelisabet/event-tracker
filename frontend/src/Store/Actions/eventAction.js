import axios from '../../axios'
import actiontypes from '../actiontypes'

export const getEventById = id => {
    return async dispatch => {
        dispatch(getEvent())

        try {
            let token = localStorage.getItem('token')
            const res = await axios.get('events/detail/' + id, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            if(res.status === 200) {
                dispatch(getEventSuccess(res.data))
            } else {
                throw new Error('Could not fetch the data...')
            }
        } catch (err) {
            dispatch(getEventFailure(err.message))

        }
    }
}


const getEvent = () => {
    return {
        type: actiontypes().event.getEvent
    }
}

const getEventSuccess = event => {
    return {
        type: actiontypes().event.getEventSuccess,
        payload: event,
        date: event.date
    }
}

const getEventFailure = err => {
    return {
        type: actiontypes().event.getEventFailure,
        payload: err
    }
}

