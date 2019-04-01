export const createRecording = recording => {
    return $.ajax({
        method: 'post',
        url: 'api/recordings',
        data: { recording }
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

export const destroyRecording = id => {
    return $.ajax({
        method: 'delete',
        url: `api/recordings/${recording.id}`
    });
};