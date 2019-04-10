import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            portraitFile: null,
            portraitUrl: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImgFile = this.handleImgFile.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
            if (this.props.formType === 'login'){
                const user = Object.assign({}, this.state);
                this.props.processForm(user)
                    .then(data => this.props.history.push(`/discover`));
                if (this.props.errors.length === 0){
                    this.props.closeModal();
                } 
            } else {
                formData.append('user[username]', this.state.username);
                formData.append('user[password]', this.state.password);
                formData.append('user[portrait]', this.state.portraitFile);
                this.props.processForm(formData)
                    .then(data => this.props.history.push(`/discover`));
                if (this.props.errors.length === 0) {
                    this.props.closeModal();
                } 
            }
    }

    handleImgFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ portraitFile: file, portraitUrl: fileReader.result });
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    renderErrors() {
        let errorArr = Object.values(this.props.errors)
        return (
            <ul className="modal-errors">
                {errorArr.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        let backgroundImg = {
            backgroundImage: 'url(' + this.state.portraitUrl + ')'
        };

        let modalMessage ="";
        let portraitUpload = null;
        if (this.props.formType === 'login'){
            modalMessage = <h1 className="modal-message">Sign into your Stereophonic Cumulonimbus account</h1>;
        } else {
            modalMessage = <h1 className="modal-message">Create your Stereophonic Cumulonimbus account</h1>;
            portraitUpload = 
            <>
                <div className="modal-profile-picture" style={backgroundImg}> 
                    <input className="modal-profile-picture-file-input"
                        type="file" onChange={this.handleImgFile} />
                </div>
                <h2 className="modal-profile-picture-label">
                    Upload Profile Picture
                </h2>
            </>
        }

        return (
            <>
            <form onSubmit={this.handleSubmit} 
                className="login-form-box">
                {modalMessage}
                {portraitUpload}
                <br />
                    <br />
                    <div className="login-text"> 
                            <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                    placeholder="username"
                                    />
                    </div>
                    <br />
                    <div className="login-text"> 
                        <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="password"
                                />
                    </div>
                    <br />
                    <button className="session-submit" type="submit"> 
                        Continue 
                    </button>
            {this.renderErrors()}
            </form>
            </>
        );
    }
}

export default withRouter(SessionForm);