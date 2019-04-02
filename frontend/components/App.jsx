import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {
    Route, 
    Redirect, 
    Switch, 
    Link, 
    HashRouter
} from 'react-router-dom';
import Modal from '../components/modal/modal'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import RecordingIndex from '../components/recordings/recording_index';
import CreateRecordingForm from '../components/recordings/recording_create';

const App = () => (
    <div id="app">
        <Modal />
        <header id="header">
            <GreetingContainer />
            <Switch>
                <ProtectedRoute exact path='/recordings/new' component={CreateRecordingForm}/>
                <ProtectedRoute exact path='/recordings/:userId' component={RecordingIndex}/>
            </Switch>
        </header>
    </div>
);

export default App;