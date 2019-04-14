import * as CommentsUtil from '../util/comments_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const createComment = comment => dispatch => {
    return (
        CommentsUtil.createComment(comment).then(comment => (
            dispatch(receiveComment(comment))
        ))
    );
};