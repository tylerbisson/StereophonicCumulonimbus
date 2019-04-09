import { connect } from 'react-redux';
import React from 'react';
import RecordingForm from './recording_form';

const msp = (state, ownProps) => {
    let recording = state.entities.recordings[ownProps.match.params.recordingId]
    return {
        recording: recording,
        user_id: state.session.id,
        artUrl: recording.artUrl,
        audioUrl: recording.audioUrl,
        formType: "update"
    }
}

const mdp = dispatch => {
    return {
        // createRecording: recording => dispatch(createRecording(recording))
    }
}

export default connect(msp, mdp)(RecordingForm)