import React from 'react';

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
        this.props.closeModal();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <>
            {/* <div className="modal-exit" onClick={this.props.closeModal} className="close-x">X</div> */}
            <form onSubmit={this.handleSubmit} 
                className="login-form-box">
                <br />
                    {this.renderErrors()}
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
            </form>
            </>
        );
    }
}

export default SessionForm;