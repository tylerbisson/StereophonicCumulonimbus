import {
    RECEIVE_RECORDING,
    RECEIVE_RECORDINGS,
    DELETE_RECORDING
} from '../actions/recordings_actions';
import { merge } from "lodash";
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
        // debugger
            return Object.assign({}, oldState, action.currentUser.recordings);
        //     // return Object.assign({}, oldState, action.currentUser.recordings)
        //     return Object.assign({}, oldState, "ppop")
        case RECEIVE_RECORDING:
            return merge({}, oldState, {[action.recording.id]: action.recording})
        case RECEIVE_RECORDINGS:
            return merge({}, oldState, action.recordings);
        case DELETE_RECORDING: 
            let newState = merge({}, oldState);
            delete newState[action.recordingId];
            return newState;
        default:
            return oldState;
    }
};

export default sessionReducer;