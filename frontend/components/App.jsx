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
import Modal from '../components/modal/modal'
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <Modal />
        <header>
            {/* <h1>Stereophonic Cumulonimbus</h1> */}
            <GreetingContainer />
            <Switch>
                {/* <AuthRoute path="/login" component={LogInFormContainer} />
                <AuthRoute path="/signup" component={SignUpFormContainer} /> */}
            </Switch>
        </header>
    </div>
);

export default App;