import React from 'react';
// import {connect} from 'react-redux';
// import {createRecording} from '../../actions/recordings_actions';
import Nav from '../nav';

class RecordingForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.recording.title,
            description: this.props.recording.description,
            artFile: null,
            artUrl: this.props.artUrl,
            audioUrl: this.props.audioUrl,
            audioFile: null,
            user_id: this.props.user_id
        }
        if (this.props.formType === "create") {
            this.audio_selected = false;
        } else {
            this.audio_selected = true;
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        if (this.props.formType === "create") {
            formData.append('recording[audio]', this.state.audioFile);
            formData.append('recording[title]', this.state.title);
            formData.append('recording[art]', this.state.artFile);
            formData.append('recording[description]', this.state.description);
            $.ajax({
                url: '/api/recordings',
                method: 'POST',
                data: formData,
                contentType: false,
                processData: false
            }).then(data => {this.props.history.push(`/users/${data.user_id}`)});
        } else {
            formData.append('recording[title]', this.state.title);
            formData.append('recording[description]', this.state.description);
            if (this.state.artFile){
                formData.append('recording[art]', this.state.artFile);
            }
            $.ajax({
                url: `/api/recordings/${this.props.recording.id}`,
                method: 'PATCH',
                data: formData,
                contentType: false,
                processData: false
            }).then(data => { this.props.history.push(`/users/${data.user_id}`) });
        }
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
        this.audio_selected = true;
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
        let backgroundImg = {
            backgroundImage: 'url(' + this.state.artUrl + ')'
        };

        // if (this.props.formType === "update"){
        //     backgroundImg = {
        //         backgroundImage: 'url(' + this.state.artUrl + ')'
        //     };
        // }

        if (this.audio_selected === false) {
            return( 
                <>
                    <Nav/>
                    <section className="recording-create">
                        <form className="recording-create-form" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="recording-create-audio-file"> Choose Track To Upload
                                <input className="recording-create-audio-file-input"
                                    type="file" onChange={this.handleAudioFile.bind(this)}/>
                            </div>
                        </form>
                    </section>
                </>
            )
        } else {
            return ( 
                <>
                    <Nav/>
                    <section className="recording-create">
                        <form className="recording-create-form" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="recording-create-audio-file"> 
                                Choose Track To Upload
                                    <input className="recording-create-audio-file-input"
                                    type="file" onChange={this.handleAudioFile.bind(this)} />
                            </div>
                            <div className="recording-create-artandtitle">
                                <div className="recording-create-img-file" style={backgroundImg}> 
                                    <label>Update Image</label>
                                    <input className="recording-create-img-input"
                                            type="file" onChange={this.handleImgFile.bind(this)} />
                                </div>
                                <div className="recording-title">
                                        <label>Title 
                                            <input className="recording-title-input" type="text" onChange={this.updated('title')}
                                            value={this.state.title}/>
                                        </label>
                                </div>
                                <div className="recording-description">
                                        <label>Description
                                            <textarea className="recording-title-input" onChange={this.updated('description')}
                                            value={this.state.description}>
                                            </textarea>
                                        </label>
                                </div>
                                <input className="submit-recording-form" type="submit" value="Save" />
                            </div>
                        </form>
                    </section>
                </>
            )
        }
    }
}

export default RecordingForm;