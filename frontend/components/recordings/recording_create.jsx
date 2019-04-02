import React from 'react';
import {connect} from 'react-redux';
import {createRecording} from '../../actions/recordings_actions';

class CreateRecordingForm extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            title: this.props.recording.title,
            description: this.props.recording.description,
            artUrl: "",
            audioUrl: ""
        }
    }

    render(){
        return(
            <h1>YOOOOOOO</h1>
        )
    }
}

const msp = state => {
    return {
        recording: {title: "", description: ""}
    }
}

const mdp = dispatch => {
    return {
        createRecording: recording => dispatch(createRecording(recording))
    }
}

export default connect(msp, mdp)(CreateRecordingForm)