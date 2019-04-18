import {
    RECEIVE_ACTIVE_RECORDING, PLAY_ACTIVE_RECORDING,
} from '../actions/active_recording_actions';

const activeRecordingReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ACTIVE_RECORDING:
        if (oldState.recordingElement !== action.recordingElement && oldState.recordingElement && action.recordingElement.isPlaying()){
            oldState.recordingElement.stop();
            clearInterval(oldState.progressTimer);
        }
        if (action.recordingElement.isPlaying()){
            return Object.assign({}, oldState, 
                {["recordingElement"]: action.recordingElement,
                ["recordingId"]: action.recordingId, 
                ["recordingDuration"]: action.recordingDuration,
                ["currentTime"]: action.currentTime,
                ["progressTimer"]: action.progressTimer
                });
        }
        case PLAY_ACTIVE_RECORDING:
            if (oldState.recordingElement && !oldState.recordingElement.isPlaying()){
                oldState.recordingElement.play();
            } else if (oldState.recordingElement && oldState.recordingElement.isPlaying()){
                oldState.recordingElement.stop();
                clearInterval(oldState.progressTimer);
            }
        default:
            return oldState;
    }
};

export default activeRecordingReducer;