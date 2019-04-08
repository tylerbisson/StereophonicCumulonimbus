export const createRecording = recording => {
    return $.ajax({
        method: 'post',
        url: 'api/recordings',
        data: recording,
        contentType: false,
        processData: false
    });
};

export const fetchRecording = id => {
    return $.ajax({
        method: 'get',
        url: `api/recordings/${id}`
    });
};

export const fetchRecordings = () => {
    return $.ajax({
        method: 'get',
        url: 'api/recordings'
    });
};

export const updateRecording = recording => {
    return $.ajax({
        method: 'patch',
        url: `api/recordings/${recording.id}`,
        data: {recording}
    });
};

export const destroyRecording = recordingId => {
    return $.ajax({
        method: 'delete',
        url: `api/recordings/${recordingId}`
    });
};

export const fetchSplashRecordings = () => {
    // debugger
    return $.ajax({
        method: "GET",
        url: `/api/splash_recordings/`,
    });
};
