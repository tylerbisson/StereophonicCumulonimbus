import React from 'react';
import {
    Route, 
    Switch, 
} from 'react-router-dom';
import Modal from '../components/modal/modal'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import RecordingIndex from '../components/recordings/recording_index';
import RecordingCreateContainer from '../components/recordings/recording_create_container'
import RecordingShow from '../components/recordings/recording_show';
import Splash from '../components/splash';
import RecordingUpdateContainer from '../components/recordings/recording_update_container';
import Discover from './discover/discover';
import PlayBar from './playbar/playbar';

const App = () => (
    <div id="app"> 
        <Modal />
        <header id="header">
            <Switch>
                <AuthRoute exact path='/' component={Splash}/>
                <ProtectedRoute exact path='/recordings/new' component={RecordingCreateContainer}/>
                <ProtectedRoute exact path='/discover' component={Discover}/>
                <ProtectedRoute exact path='/users/:userId' component={RecordingIndex}/>
                <ProtectedRoute exact path='/recordings/edit/:recordingId' component={RecordingUpdateContainer}/>
                <Route exact path='/recordings/:recordingId' component={RecordingShow}/>
            </Switch>
        </header>
        <PlayBar/>
    </div>
);

export default App;