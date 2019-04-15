import * as CommentsUtil from '../util/comments_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

export const createComment = comment => dispatch => {
    return (
        CommentsUtil.createComment(comment).then(comment => (
            dispatch(receiveComment(comment))
        ))
    );
};

export const fetchRecordingComments = recordingId => dispatch => {
    return(
        CommentsUtil.fetchRecordingComments(recordingId).then(comments =>(
            dispatch(receiveComments(comments))
        ))
    );
}