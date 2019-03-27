import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {
    Route, 
    Redirect, 
    Switch, 
    Link, 
    HashRouter
} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => (
    <div>
        <header>
            <h1>Stereophonic Cumulonimbus</h1>
            <GreetingContainer />
        </header>
        <Switch>
            <Route path="/login" component={LogInFormContainer} />
            <Route path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;