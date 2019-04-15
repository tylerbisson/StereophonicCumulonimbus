export const createComment = comment => {
    return $.ajax({
        method: 'post',
        url: `api/comments`,
        data: comment
    });
};

export const fetchRecordingComments = recordingId => {
    // debugger
    return $.ajax({
        method: "GET",
        url: `/api/recording_comments`,
        data: recordingId
    });
};