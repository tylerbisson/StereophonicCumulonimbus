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
        progressTimer: args[4],
        play: args[5]
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

