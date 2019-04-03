import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
            const user = Object.assign({}, this.state);
            this.props.processForm(user)
                .then(data => this.props.history.push(`/recordings/${data.currentUser.user.id}`));
            if (this.props.errors.length === 0){
                this.props.closeModal();
            } 
    }

    // handleDemoLogin() {
    //     this.props.demoLogin({ username: "Demonstrational User For Your Convenience", password: 'password' })
    //         .then(data => {
    //             this.props.history.push(`/recordings/${data.currentUser.user.id}`)
    //         });
    // }

    renderErrors() {
        // debugger
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
        let modalMessage =""
        if (this.props.formType === 'login'){
            modalMessage = <h1 className="modal-message">Sign into your Stereophonic Cumulonimbus account</h1>;
        } else {
            modalMessage = <h1 className="modal-message">Create your Stereophonic Cumulonimbus account</h1>;
        }

        return (
            <>
            {/* <div className="modal-exit" onClick={this.props.closeModal} className="close-x">X</div> */}
            <form onSubmit={this.handleSubmit} 
                className="login-form-box">
                {modalMessage}
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