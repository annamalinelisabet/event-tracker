import axios from '../../axios'
import actiontypes from '../actiontypes'

export const getEvents = userId => {

    return async dispatch => {
        dispatch({
            type: actiontypes().events.getEvents
        })
        try {
            let token = localStorage.getItem('token')
            const res = await axios.get('events/' + userId, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            if(res.status === 200) {
                dispatch(getEventsSuccess(res.data))
            } else {
                throw new Error('Could not fetch the data...')
            }
        } catch (err) {
            dispatch(getEventsFailure(err.message))
        }
    }
}

export const deleteEventById = id => {
    
    return async dispatch => {
        dispatch({
            type: actiontypes().events.deleteEvent
        })

        try {
            const res = await axios.delete('events/' + id)
            if(res.status === 200) {
                dispatch(deleteEventSuccess(res.data._id))
            } else {
                throw new Error('Could not delete the data...')
            }
        } catch (err) {
            dispatch(deleteEventFailure(err.message))

        }
    }
}

export const clearEvents = () => {
    return {
        type: actiontypes().events.clearEvents
    }
}

const getEventsSuccess = events => {
    return {
        type: actiontypes().events.getEventsSuccess,
        payload: events
    }
}

const getEventsFailure = err => {
    return {
        type: actiontypes().events.getEventsFailure,
        payload: err
    }
}

const deleteEventSuccess = id => {
    return {
        type: actiontypes().events.deleteEventSuccess,
        payload: id
    }
}
const deleteEventFailure = err => {
    return {
        type: actiontypes().events.deleteEventFailure,
        payload: err
    }
}
