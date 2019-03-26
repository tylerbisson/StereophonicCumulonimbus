import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionAPIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    //TESTINGTESTINGTESTING
    window.login = sessionAPIUtil.login;
    window.signup = sessionAPIUtil.signup;
    window.logout = sessionAPIUtil.logout;
    //TESTINGTESTINGTESTING
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Stereophonic Cumulonimbus</h1>, root);
});