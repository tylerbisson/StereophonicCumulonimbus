import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionActions from './actions/session_actions';
import * as sessionAPIUtil from './util/session_api_util';
import * as recordingActions from './actions/recordings_actions';
import * as userActions from './actions/user_actions';
import * as commentActions from './actions/comments_actions';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        // debugger 
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
    //TESTINGTESTINGTESTING
    window.login = sessionActions.login;
    // window.signup = sessionAPIUtil.signup;
    window.logout = sessionAPIUtil.logout;
    window.createComment = commentActions.createComment;
    // we don't put the store directly on the window because
    // it can be confusing when debugging, sometimes giving you access to state
    // when you shouldn't
    window.getState = store.getState;
    window.dispatch = store.dispatch; // just for testing!
    // window.createRecording = recordingActions.createRecording;
    window.fetchSplashRecordings = recordingActions.fetchSplashRecordings;
    window.fetchUser = userActions.fetchUser;
    //TESTINGTESTINGTESTING
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Stereophonic Cumulonimbus</h1>, root);
    ReactDOM.render(<Root store={ store }/>, root);
});
