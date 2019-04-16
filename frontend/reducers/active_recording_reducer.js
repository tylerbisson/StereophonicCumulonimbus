import {
    RECEIVE_ACTIVE_RECORDING,
} from '../actions/active_recording_actions';

const activeRecordingReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ACTIVE_RECORDING:
            return Object.assign({}, oldState, {["recordingId"]: action.recordingId});
            // return action.recordingId;
        default:
            return oldState;
    }
};

export default activeRecordingReducer;