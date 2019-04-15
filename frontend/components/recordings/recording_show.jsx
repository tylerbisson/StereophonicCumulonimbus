import React from 'react';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import RecordingItem from '../recordings/recording_item';
import Nav from '../nav';
import {fetchRecording, destroyRecording} from '../../actions/recordings_actions';
import CommentIndex from '../comments/comment_index';
import {createComment} from '../../actions/comments_actions';

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
    }

    updated(field) {
        return e => this.setState({
            [field]: e.target.value
        })
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
    }

    componentDidUpdate(prevProps) {
        if (prevProps.comments !== this.props.comments) {
            this.setState({
                comments: this.props.comments
            });
        }
    }

    render(){
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
                            <h2 className="recording-hero-artist">{this.props.recording.username}</h2>
                            <h1 className="recording-hero-name">{this.props.recording.title}</h1>
                        </div>
                    </div>
                    <div className="recording-info" >
                        <form className="recording-comment-div" onSubmit={this.handleCommentSubmt}>
                            <div className="recording-comment-userportrait" style={userImg}/>
                            <input className="recording-comment-input" type="text" placeholder="Write a comment"
                                onChange={this.updated("comment")}/>
                            {/* <input type="submit" /> */}
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
        createComment: comment => dispatch(createComment(comment))
    }
}

export default connect(msp, mdp)(RecordingShow);