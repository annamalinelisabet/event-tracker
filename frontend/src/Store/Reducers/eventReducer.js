import actiontypes from "../actiontypes"

const initState = {
    data: null,
    loading: false, 
    date: null,
    error: null
}

const eventReducer = (state = initState, action) => {
    switch(action.type) {

        case actiontypes().event.getEvent:
            return {
                data: null,
                loading: true,
                date: null,
                error: null
            }

        case actiontypes().event.getEventSuccess:
            return {
                ...state,
                data: action.payload,
                loading: false,
                date: action.date,
                error: null
            }

        case actiontypes().event.getEventFailure:
            return {
                ...state,
                data: null,
                loading: false, 
                date: null,
                error: action.payload
            }
            
        default:
            return state
    }
}

export default eventReducer