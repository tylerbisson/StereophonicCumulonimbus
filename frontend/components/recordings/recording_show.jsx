import React from 'react';
import { connect } from 'react-redux';
import RecordingItem from '../recordings/recording_item';
import Nav from '../nav';
import {fetchRecording, destroyRecording} from '../../actions/recordings_actions';
import CommentIndex from '../comments/comment_index';
import { createComment } from '../../actions/comments_actions';
import { receiveNewActiveRecording, receiveActiveRecording } from '../../actions/active_recording_actions';
import WaveSurfer from 'wavesurfer.js';

class RecordingShow extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            recording: this.props.recording,
            comments: this.props.comments,
            comment: ""
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCommentSubmt = this.handleCommentSubmt.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.handlePlayPause = this.handlePlayPause.bind(this);
    }

    updated(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handlePlay(){
        this.waveForm.play();
        if (this.progress === null){
            this.progress = setInterval(() => 
                this.props.receiveActiveRecording(
                    [this.waveForm, 
                    this.props.recording.id, 
                    this.waveForm.getDuration(), 
                    this.waveForm.getCurrentTime(),
                    this.progress]), 
                        500);
        }
    }

    handlePlayPause() {
        //tests if waveForm is loaded 
        if (this.waveForm.getDuration()){
            this.waveForm.playPause();
            if (this.progress) {
                clearInterval(this.progress);
                this.progress = null;
            } else {
                this.progress = setInterval(() =>
                    this.props.receiveActiveRecording(
                        [this.waveForm, 
                        this.props.recording.id,
                        this.waveForm.getDuration(),
                        this.waveForm.getCurrentTime(),
                        this.progress]),
                    500);
            }
        }
    }

    handleCommentSubmt(e){
        e.preventDefault();
        this.props.createComment({ comment: 
            { body: this.state.comment, user_id: this.props.currentUser.id, 
                content_type: "Recording", content_id: this.props.recording.id }
        }).then(() => this.props.fetchRecording(this.props.match.params.recordingId));
    }

    handleDelete(recordingId){
        this.props.destroyRecording(recordingId)
            .then(() => this.props.history.push(`/users/${this.props.currentUser.id}`));
    }

    handleEdit(){
        this.props.history.push(`/recordings/edit/${this.props.recording.id}`)
    }

    componentDidMount(){
        this.props.fetchRecording(this.props.match.params.recordingId);
        this.waveForm = WaveSurfer.create({
            container: '#audio-waveForm',
            waveColor: '#f2f2f2',
            progressColor: '#ff540a',
            barWidth: 2,
            height: 100,
            fillParent: true,
            normalize: true,
            cursorWidth: 0
        });   
        this.props.receiveActiveRecording([this.waveForm, this.props.recording.id, this.waveForm.getDuration(), this.waveForm.getCurrentTime()]);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.comments !== this.props.comments) {
            this.setState({
                comments: this.props.comments
            });
        }
        
        if (prevProps.recording !== this.props.recording) {
            this.waveForm.load(this.props.recording.audioUrl);
        }

        if (this.waveForm.getCurrentTime() >= this.waveForm.getDuration()){
            clearInterval(this.progress);
            this.progress = null;
        }
    }

    render() {        
        let backgroundImg = {
            backgroundImage: 'url(' + this.props.recording.artUrl + ')'
        };
        let userImg = {
            backgroundImage: 'url(' + this.props.currentUser.portraitUrl + ')'
        };
        let recordingButtons = null;
        
        if (this.props.currentUser.id === this.props.recording.user_id){
            recordingButtons = 
                <div className="recording-buttons">
                    <button className="recording-button"
                        onClick={() => this.handleEdit()}>
                        Edit
                    </button>
                    <button className="recording-button"
                        onClick={() => this.handleDelete(this.props.recording.id)}>
                        Delete
                        </button>
                </div>;
        } else {
            recordingButtons =
                <div className="recording-buttons">
                    <button className="recording-button">
                        Like
                    </button>
                </div>;   
        }

        let comments = Object.values(this.state.comments);
        comments = comments.filter(comment => comment["content_id"] === parseInt(this.props.recording.id));

        return(
            <>
                <Nav/>
                <section className="recording-show-section">
                    <div className="recording-show-banner" > 
                        <div className="recording-hero" style={backgroundImg}></div>
                        <div className="recording-audioandtitle">
                            <RecordingItem recording={this.props.recording} key={this.props.recording.id} 
                                recordingShow = {true}/>
                            <img className="waveform-play-button" src={window.playButtonURL} onClick={this.handlePlayPause}/>
                            <h2 className="recording-hero-artist">{this.props.recording.username}</h2>
                            <h1 className="recording-hero-name">{this.props.recording.title}</h1>
                            <div className="audio-waveForm-div" onClick={this.handlePlay}>
                                <div id="audio-waveForm"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="recording-info" >
                        <form className="recording-comment-div" onSubmit={this.handleCommentSubmt}>
                            <div className="recording-comment-userportrait" style={userImg}/>
                            <input className="recording-comment-input" type="text" placeholder="Write a comment"
                                onChange={this.updated("comment")}/>
                        </form>
                        {recordingButtons}
                        <img className="recording-info-portrait" src={this.props.recording.portraitUrl}/>
                        <p className="recording-info-description" >{this.props.recording.description}</p>
                        <CommentIndex comments={comments} />
                    </div>
                </section>
            </>
        )
    }
}


const msp = (state, ownprops) => {
    let recordingId = parseInt(ownprops.match.params.recordingId);
    return {
        currentUser: state.entities.users[state.session.id] ? state.entities.users[state.session.id] : {portraitUrl: ""},
        recording: state.entities.recordings[recordingId] ? state.entities.recordings[recordingId] : {recording: {artUrl: "", id: "", title: ""}},
        comments: state.entities.comments 
    }
}

const mdp = dispatch => {
    return {
        fetchRecording: id => dispatch(fetchRecording(id)),
        destroyRecording: id => dispatch(destroyRecording(id)), 
        createComment: comment => dispatch(createComment(comment)),
        receiveActiveRecording: args => dispatch(receiveActiveRecording(args)),
        receiveNewActiveRecording: args => dispatch(receiveNewActiveRecording(args))
    }
}

export default connect(msp, mdp)(RecordingShow);