import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import eventReducer from './eventReducer';
import userReducer from './userReducer';

export default combineReducers({
    events: eventsReducer,
    event: eventReducer,
    user: userReducer
})