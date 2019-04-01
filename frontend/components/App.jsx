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
import RecordingIndex from '../components/recordings/recording_index'

const App = () => (
    <div>
        <Modal />
        <header>
            {/* <h1>Stereophonic Cumulonimbus</h1> */}
            <GreetingContainer />
            <Switch>
                <Route exact path='/recordings/:userId' component={RecordingIndex}/>
            </Switch>
        </header>
        {/* <RecordingIndex/> */}
    </div>
);

export default App;