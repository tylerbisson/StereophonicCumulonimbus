import {
    RECEIVE_RECORDING,
    RECEIVE_RECORDINGS,
    DELETE_RECORDING,
    RECEIVE_SPLASH_RECORDINGS
} from '../actions/recordings_actions';
import { merge } from "lodash";
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {ADD_USER} from '../actions/user_actions';

const recordingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, action.currentUser.recordings);
        case ADD_USER:
            // return Object.assign({}, oldState, action.currentUser.recordings);
            return action.currentUser.recordings;
        case RECEIVE_RECORDING:
            return merge({}, oldState, { [action.recording.recording.id]: action.recording.recording})
        case RECEIVE_RECORDINGS:
            return merge({}, oldState, action.recordings);
        case RECEIVE_SPLASH_RECORDINGS: 
            return action.recordings;
        case DELETE_RECORDING: 
            let newState = merge({}, oldState);
            delete newState[action.recordingId];
            return newState;
        default:
            return oldState;
    }
};

export default recordingsReducer;