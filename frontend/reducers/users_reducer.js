import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { ADD_USER } from '../actions/user_actions';
import {RECEIVE_RECORDING} from '../actions/recordings_actions';
import {RECEIVE_COMMENT} from '../actions/comments_actions';

const usersReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            // return {[action.currentUser.user.id]: action.currentUser.user};
            return Object.assign({}, state, { [action.currentUser.user.id]: action.currentUser.user})
            // return action.currentUser.user.id;
        case ADD_USER:
            return Object.assign({}, state, { [action.currentUser.user.id]: action.currentUser.user })
        case RECEIVE_RECORDING: 
            return Object.assign({}, state, action.recording.users)
        case RECEIVE_COMMENT: 
            return Object.assign({}, state, action.comment.user)
        default:
            return state;
    }
};

export default usersReducer;