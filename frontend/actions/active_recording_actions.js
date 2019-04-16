export const RECEIVE_ACTIVE_RECORDING = 'RECEIVE_ACTIVE_RECORDING';

export const receiveActiveRecording = recordingId => ({
    type: RECEIVE_ACTIVE_RECORDING,
    recordingId
});

