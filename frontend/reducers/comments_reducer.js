import {
    RECEIVE_COMMENT
} from '../actions/comments_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { ADD_USER } from '../actions/user_actions';

const commentsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_COMMENT:
            // debugger
            return Object.assign({}, oldState, action.comment);
        default:
            return oldState;
    }
};

export default commentsReducer;