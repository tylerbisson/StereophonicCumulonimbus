import * as APIUser from '../util/user_util';

export const ADD_USER = 'ADD_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => {
    return {
        type: ADD_USER,
        currentUser
    }
};

export const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
};

export const fetchUser = userId => dispatch => {
    return (
        APIUser.fetchUser(userId).then(user => (
            dispatch(receiveCurrentUser(user))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
    );
};