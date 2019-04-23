import {
    RECEIVE_ACTIVE_RECORDING, PLAY_ACTIVE_RECORDING,
} from '../actions/active_recording_actions';

const activeRecordingReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ACTIVE_RECORDING:
        if (oldState.recordingElement !== action.recordingElement && oldState.recordingElement && action.recordingElement.isPlaying()){
            console.log("stop1");
            oldState.recordingElement.stop();
            clearInterval(oldState.progressTimer);
        }

        if (!action.recordingElement.isPlaying() && action.play !== "stop" && action.play) {
            console.log("play1");
            // debugger
            action.recordingElement.play();
            return Object.assign({}, oldState,
                {
                    ["recordingElement"]: action.recordingElement,
                    ["recordingId"]: action.recordingId,
                    ["recordingDuration"]: action.recordingDuration,
                    ["currentTime"]: action.currentTime,
                    ["progressTimer"]: action.progressTimer
                });
        }

        if (action.recordingElement.isPlaying() && action.play !== "stop" && action.play){
            console.log("play2");
            return Object.assign({}, oldState, 
                {["recordingElement"]: action.recordingElement,
                ["recordingId"]: action.recordingId, 
                ["recordingDuration"]: action.recordingDuration,
                ["currentTime"]: action.currentTime,
                ["progressTimer"]: action.progressTimer
                });

        } else if (action.recordingElement.isPlaying() && action.play === false){
            console.log("pause");
            action.recordingElement.pause();
            return Object.assign({}, oldState,
                {
                    ["recordingElement"]: action.recordingElement,
                    ["recordingId"]: action.recordingId,
                    ["recordingDuration"]: action.recordingDuration,
                    ["currentTime"]: action.currentTime,
                    ["progressTimer"]: action.progressTimer
                });   
        } else if (action.recordingElement.isPlaying() && action.play == "stop") {
            console.log("stop");
            action.recordingElement.stop();
            return Object.assign({}, oldState,
                {
                    ["recordingElement"]: action.recordingElement,
                    ["recordingId"]: action.recordingId,
                    ["recordingDuration"]: action.recordingDuration,
                    ["currentTime"]: action.currentTime,
                    ["progressTimer"]: action.progressTimer
                });
        }
        default:
            return oldState;
    }
};

export default activeRecordingReducer;