import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';

function SessionForm (props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [portraitFile, setPortraitFile] = useState(null);
    const [portraitUrl, setPortraitUrl] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
            if (props.formType === 'login'){
                let data = {
                    username: username,
                    password: password
                };
                props.processForm(data)
                    .then(() => {
                        props.closeModal();
                        props.history.push(`/discover`);
                    });
            } else {
                let formData = new FormData();
                formData.append('user[username]', username);
                formData.append('user[password]', password);
                formData.append('user[portrait]', portraitFile);
                props.processForm(formData)
                    .then(() => {
                        props.closeModal();
                        props.history.push(`/discover`);
                    });
            }
    }

    const handleImgFile = (e) => {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            setPortraitFile(file);
            setPortraitUrl(fileReader.result);
            // setState({ portraitFile: file, portraitUrl: fileReader.result });
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    const renderErrors = () => {
        let errorArr = Object.values(props.errors)
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

        let backgroundImg = {
            backgroundImage: 'url(' + portraitUrl + ')'
        };

        let modalMessage ="";
        let portraitUpload = null;
        if (props.formType === 'login'){
            modalMessage = <h1 className="modal-message">Sign into your Stereophonic Cumulonimbus account</h1>;
        } else {
            modalMessage = <h1 className="modal-message">Create your Stereophonic Cumulonimbus account</h1>;
            portraitUpload = 
            <>
                <div className="modal-profile-picture" style={backgroundImg}> 
                    <input className="modal-profile-picture-file-input"
                        type="file" onChange={handleImgFile} />
                </div>
                <h2 className="modal-profile-picture-label">
                    Upload Profile Picture
                </h2>
            </>
        }

        return (
            <form onSubmit={handleSubmit} 
                className="login-form-box">
                {modalMessage}
                {portraitUpload}
                <br />
                    <br />
                    <div className="login-text"> 
                            <input type="text"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    className="login-input"
                                    placeholder="username"
                                    />
                    </div>
                    <br />
                    <div className="login-text"> 
                        <input type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="login-input"
                                placeholder="password"
                                />
                    </div>
                    <br />
                    <button className="session-submit" type="submit"> 
                        Continue 
                    </button>
            {renderErrors()}
            </form>
        );
    }

export default withRouter(SessionForm);