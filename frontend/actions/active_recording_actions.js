export const RECEIVE_ACTIVE_RECORDING = 'RECEIVE_ACTIVE_RECORDING';

export const receiveActiveRecording = args => {
    return{
        type: RECEIVE_ACTIVE_RECORDING,
        recordingId: args[0],
        recordingDuration: args[1],
        currentTime: args[2]
    }
};


