import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import RecordingItem from '../recordings/recording_item';
import Nav from '../nav';

class RecordingShow extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <Nav/>
                <RecordingItem recording={this.props.recording} key={this.props.recording.id}/>
            </>
        )
    }
}


const msp = (state, ownprops) => {
    return {
        recording: state.entities.recordings[ownprops.match.params.recordingId]
    }
}

const mdp = dispatch => {
    return {}
}

export default connect(msp, mdp)(RecordingShow);