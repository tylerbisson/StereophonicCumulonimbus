export const RECEIVE_ACTIVE_RECORDING = 'RECEIVE_ACTIVE_RECORDING';
export const PLAY_ACTIVE_RECORDING = 'PLAY_ACTIVE_RECORDING';
export const UPDATE_ACTIVE_RECORDING_PROGRESS = 'UPDATE_ACTIVE_RECORDING_PROGRESS';


export const receiveActiveRecording = args => {
    return{
        type: RECEIVE_ACTIVE_RECORDING,
        recordingElement: args[0],
        recordingId: args[1],
        recordingDuration: args[2],
        currentTime: args[3],
        progressTimer: args[4]
    }
};

export const playActiveRecording = () => {
    return {
        type: PLAY_ACTIVE_RECORDING
    }
};

export const updateActiveRecordingProgress = recordingElement => {
    if (this.progress === null) {
        this.progress = setInterval(() =>
            this.props.receiveActiveRecording(
                [this.waveForm,
                this.props.recording.id,
                this.waveForm.getDuration(),
                this.waveForm.getCurrentTime(),
                this.progress]),
            500);
    }
}; 

// export const receiveNewActiveRecording = args => {
//     return {
//         type: RECEIVE_ACTIVE_RECORDING,
//         recordingElement: args[0],
//         recordingId: args[1],
//         recordingDuration: args[2],
//         currentTime: args[3]
//     }
// };

