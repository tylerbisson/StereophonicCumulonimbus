import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionActions from './actions/session_actions';
import * as sessionAPIUtil from './util/session_api_util';
import * as commentActions from './actions/comments_actions';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                recordings: window.currentUser.recordings,
                users: { [window.currentUser.user.id]: window.currentUser.user }
            },
            session: { id: window.currentUser.user.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    //ACTIONS ADDED TO WINDOW FOR EASE OF DEV 2/6/20
    window.login = sessionActions.login;
    window.logout = sessionAPIUtil.logout;
    window.createComment = commentActions.createComment;
    window.getState = store.getState;
    window.dispatch = store.dispatch; // just for testing!

    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Stereophonic Cumulonimbus</h1>, root);
    ReactDOM.render(<Root store={ store }/>, root);
});
