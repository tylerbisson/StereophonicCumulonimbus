export const RECEIVE_ACTIVE_RECORDING = 'RECEIVE_ACTIVE_RECORDING';

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

// export const receiveNewActiveRecording = args => {
//     return {
//         type: RECEIVE_ACTIVE_RECORDING,
//         recordingElement: args[0],
//         recordingId: args[1],
//         recordingDuration: args[2],
//         currentTime: args[3]
//     }
// };

