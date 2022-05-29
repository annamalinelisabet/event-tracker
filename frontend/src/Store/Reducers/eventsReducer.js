import actiontypes from "../actiontypes"

const initState = {
    data: [],
    loading: false, 
    error: null
}

const eventsReducer = (state = initState, action) => {
    switch(action.type) {

        case actiontypes().events.getEvents:
            return {
                ...state, 
                loading: true
            }

        case actiontypes().events.getEventsSuccess:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            }

        case actiontypes().events.getEventsFailure:
            return {
                ...state,
                userId: null,
                loading: false,
                error: action.payload
            }
        case actiontypes().events.deleteEvent:
            return {
                ...state,
                loading: true
            }
        case actiontypes().events.deleteEventSuccess:
            state.events = state.events.filter(event => event._id !== action.payload)
            return {
                ...state,
                loading: false,
                error: null
            }
        case actiontypes().events.deleteEventFailure:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actiontypes().events.clearEvents:
            return {
                ...initState,
            }
        default:
            return state
    }
}

export default eventsReducer