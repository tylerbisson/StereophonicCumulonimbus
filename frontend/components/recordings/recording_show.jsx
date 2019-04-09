import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import RecordingItem from '../recordings/recording_item';
import Nav from '../nav';
import {fetchRecording, destroyRecording} from '../../actions/recordings_actions';

class RecordingShow extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.recording;
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleDelete(recordingId){
        this.props.destroyRecording(recordingId)
            .then(() => this.props.history.push(`/users/${this.props.currentUser.id}`));
    }

    handleEdit(){
        this.props.history.push(`/recordings/edit/${this.props.recording.id}`)
    }

    componentDidMount(){
        // debugger
        this.props.fetchRecording(this.props.match.params.recordingId);
    }

    render(){
        // debugger
        let backgroundImg = {
            backgroundImage: 'url(' + this.props.recording.artUrl + ')'
        };

        let userImg = {
            backgroundImage: 'url(' + this.props.currentUser.portraitUrl + ')'
        };
        // debugger
        
        return(
            <>
                <Nav/>
                <section className="recording-show-section">
                    <div className="recording-show-banner" > 
                        <div className="recording-hero" style={backgroundImg}></div>
                        <div className="recording-audioandtitle">
                            <RecordingItem recording={this.props.recording} key={this.props.recording.id} 
                            recordingShow = {true}/>
                            <h2 className="recording-hero-artist">{this.props.recording.username}</h2>
                            <h1 className="recording-hero-name">{this.props.recording.title}</h1>
                        </div>
                    </div>
                    <div className="recording-info" >
                        <div className="recording-comment-div" >
                            <div className="recording-comment-userportrait" style={userImg}/>
                            <input className="recording-comment-input" type="text" placeholder="Write a comment"/>
                        </div>
                        <div className="recording-buttons">
                            <button className="recording-button"
                                onClick={() => this.handleEdit()}>
                                Edit
                            </button>
                            <button className="recording-button"
                                onClick={() => this.handleDelete(this.props.recording.id)}>
                                Delete
                            </button>
                        </div>
                        <img className="recording-info-portrait" src={this.props.recording.portraitUrl}/>
                        <p className="recording-info-description" >{this.props.recording.description}</p>
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
        currentUser: state.entities.users[state.session.id] ? state.entities.users[state.session.id] : {portraitUrl: ""},
        recording: state.entities.recordings[recordingId] ? state.entities.recordings[recordingId] : {recording: {artUrl: "", id: "", title: ""}}
    }
}

const mdp = dispatch => {
    return {
        fetchRecording: id => dispatch(fetchRecording(id)),
        destroyRecording: id => dispatch(destroyRecording(id))
    }
}

export default connect(msp, mdp)(RecordingShow);