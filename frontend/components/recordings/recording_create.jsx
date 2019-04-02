import React from 'react';
import {connect} from 'react-redux';
import {createRecording} from '../../actions/recordings_actions';

class CreateRecordingForm extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            title: this.props.recording.title,
            description: this.props.recording.description,
            artFile: null,
            artUrl: null,
            audioUrl: null,
            audioFile: null,
            user_id: this.props.user_id
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('recording[audio]', this.state.audioFile)
        formData.append('recording[title]', this.state.title);
        formData.append('recording[art]', this.state.artFile);
        // debugger
        $.ajax({
            url: '/api/recordings',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        });
        // this.props.createRecording(formData);
    }
 
    updated(field){
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleAudioFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ audioFile: file, audioUrl: fileReader.result});
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleImgFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ artFile: file, artUrl: fileReader.result });
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render(){
        return(
            <section className="recording-create">
                <form className="recording-create-form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="recording-create-audio-file"> Choose Track To Upload
                        <input className="recording-create-audio-file-input"
                            type="file" onChange={this.handleAudioFile.bind(this)}/>
                    </div>
                    <label htmlFor="">Title
                        <input type="text" onChange={this.updated('title')} />
                    </label>
                    <input type="file" onChange={this.handleImgFile.bind(this)} />
                    <input type="submit" value="submit"/>
                </form>
            </section>
        )
    }
}

const msp = state => {
    return {
        recording: {title: "", description: ""},
        user_id: state.session.id
    }
}

const mdp = dispatch => {
    return {
        createRecording: recording => dispatch(createRecording(recording))
    }
}

export default connect(msp, mdp)(CreateRecordingForm)