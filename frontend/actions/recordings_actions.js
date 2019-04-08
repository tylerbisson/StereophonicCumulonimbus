import * as RecordingsUtil from '../util/recordings_util';

export const RECEIVE_RECORDING = 'RECEIVE_RECORDING';
export const RECEIVE_RECORDINGS = 'RECEIVE_RECORDINGS';
export const DELETE_RECORDING = 'DELETE_RECORDING';
export const RECEIVE_RECORDING_ERRORS = 'RECEIVE_RECORDING_ERRORS';
export const RECEIVE_SPLASH_RECORDINGS = 'RECEIVE_SPLASH_RECORDINGS';

export const receiveRecording = recording => ({
    type: RECEIVE_RECORDING,
    recording
});

export const receiveSplashRecordings = recordings => ({
    type: RECEIVE_SPLASH_RECORDINGS,
    recordings
});

export const receiveRecordings = recordings => ({
    type: RECEIVE_RECORDINGS,
    recordings
});

export const deleteRecording = recording => ({
    type: DELETE_RECORDING,
    recordingId: recording.id 
});

export const receiveRecordingErrors = errors => ({
    type: RECEIVE_RECORDING_ERRORS,
    errors
});

export const fetchRecording = recording => dispatch => {
    return (
        RecordingsUtil.fetchRecording(recording).then(recording => (
            dispatch(receiveRecording(recording))
            // , err => (
            // dispatch(receiveErrors(err.responseJSON))
        ))
    );
};

export const destroyRecording = recordingId => dispatch => {
    return (
        RecordingsUtil.destroyRecording(recordingId).then(recording => (
            dispatch(deleteRecording(recording))
            // , err => (
            // dispatch(receiveErrors(err.responseJSON))
        ))
    );
};

// export const createRecording = recording => dispatch => {
//     // debugger
//     return (
//         RecordingsUtil.createRecording(recording).then(recording => (
//             dispatch(receiveRecording(recording))
//             // , err => (
//             // dispatch(receiveErrors(err.responseJSON))
//         ))
//     );
// };

export const fetchRecordings = () => dispatch => {
    // debugger
    return (
        RecordingsUtil.fetchRecordings().then(recordings => (
            dispatch(receiveRecordings(recordings))
            // , err => (
            // dispatch(receiveErrors(err.responseJSON))
        ))
    );
};

export const fetchSplashRecordings = () => dispatch => {
    return (
        RecordingsUtil.fetchSplashRecordings().then(recordings => (
            dispatch(receiveSplashRecordings(recordings))
            // , err => (
            // dispatch(receiveErrors(err.responseJSON))
        ))
    );
}