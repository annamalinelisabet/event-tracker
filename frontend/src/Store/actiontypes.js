const actiontypes = () => {
    return {
        auth: {},
        events: {
            getEvents:          'GET_EVENTS',
            getEventsSuccess:   'GET_EVENTS_SUCCESS',
            getEventsFailure:   'GET_EVENTS_FAILURE',
            deleteEvent:        'DELETE_EVENT',
            deleteEventSuccess: 'DELETE_EVENT_SUCCESS',
            deleteEventFailure: 'DELETE_EVENT_FAILURE',
            clearEvents:        'CLEAR_EVENTS'
        },
        event: {
            getEvent:           'GET_EVENT',
            getEventSuccess:    'GET_EVENT_SUCCESS', 
            getEventFailure:    'GET_EVENT_FAILURE'
        },
        user: {
            loading:            'USER_LOADING',
            userFailure:        'USER_FAILURE',
            userSuccess:        'USER_SUCCESS',
            logout:             'LOGOUT'
        }
    }
}

export default actiontypes;