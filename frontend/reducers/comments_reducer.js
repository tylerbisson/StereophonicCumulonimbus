import {
    RECEIVE_COMMENT,
    RECEIVE_COMMENTS
} from '../actions/comments_actions';
import {RECEIVE_RECORDING} from '../actions/recordings_actions';

const commentsReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_RECORDING:
            return Object.assign({}, oldState, action.recording.comments);
        case RECEIVE_COMMENT:
            return Object.assign({}, oldState, {[action.comment.id]: action.comment});
        case RECEIVE_COMMENTS:
            return Object.assign({}, oldState, action.comments);
        default:
            return oldState;
    }
};

export default commentsReducer;