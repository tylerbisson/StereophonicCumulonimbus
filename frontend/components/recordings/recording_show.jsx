import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import RecordingItem from '../recordings/recording_item';
import Nav from '../nav';
import {fetchRecording} from '../../actions/recordings_actions';

class RecordingShow extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.recording;
    }

    componentDidMount(){
        debugger
        this.props.fetchRecording(this.props.match.params.recordingId);
    }

    render(){

        let backgroundImg = {
            backgroundImage: 'url(' + this.props.recording.artUrl + ')'
        };
        
        return(
            <>
                <Nav/>
                <section className="recording-show-section">
                    <div className="recording-show-banner" > 
                        <div className="recording-hero" style={backgroundImg}></div>
                        <div className="recording-audioandtitle">
                            <RecordingItem recording={this.props.recording} key={this.props.recording.id} 
                            recordingShow = {true}/>
                            <h1 className="recording-hero-name">{this.props.recording.title}</h1>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}


const msp = (state, ownprops) => {
    let recordingId = parseInt(ownprops.match.params.recordingId);
    // debugger
    return {
        recording: state.entities.recordings[recordingId] ? state.entities.recordings[recordingId] : {recording: {artUrl: "", id: "", title: ""}}
    }
}

const mdp = dispatch => {
    return {
        fetchRecording: id => dispatch(fetchRecording(id))
    }
}

export default connect(msp, mdp)(RecordingShow);