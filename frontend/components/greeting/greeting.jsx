import React from 'react';
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props);

        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleDemoLogin(){
        // debugger 
        this.props.demoLogin({ username: "Tyler Bisson", password: 'password' })
            .then(data => {
                this.props.history.push(`/recordings/${data.currentUser.user.id}`)
            });
    }

    sessionLinks(){
        return(
            <section className="greeting-hero">
                <nav className="login-signup">
                    <div className="nav-buttonbox-left-splash">
                        <img className="logo" src={window.logoURL} />
                        <h1>STEREOPHONIC CUMULONIMBUS</h1>     
                    </div>
                    <div className="nav-buttonbox-right">
                        <button className="nav-login" 
                            onClick={() => this.props.openModal('login')}>Sign in</button>
                            &nbsp;&nbsp;
                        <button className="nav-signup" 
                            onClick={() => this.props.openModal('signup')}>Create account</button>
                    </div>
                </nav>
                <div className="hero-slogan">
                    <h1>What's next in music is first on Stereophonic Cumulonimbus</h1>
                    <button className="demo-button" onClick={this.handleDemoLogin}>Login as Demo User</button>
                </div>
            </section>
        )
    };
    personalGreeting(){
        // console.log("this.props.currentUser");
        // console.log(this.props.currentUser);
        return(
            <div className="nav-bar"> 
                <nav className="nav-loggedin">
                    <div className="nav-buttonbox-left">
                        <img className="nav-loggedin-logo" src={window.logoURL} />
                        <button className="nav-home">Home</button>
                    </div>
                        <div className="nav-buttonbox-right-loggedin">
                            <button className={"nav-greetingmessage"}>
                                Hi, {this.props.currentUser.username}!</button>
                            <button className="nav-logout" 
                                onClick={this.props.logout}>Log Out</button>
                        </div>
                </nav>
            </div> 
        )
    };

    render(){
        // debugger
        // if (this.props.currentUser) {
        //     this.props.closeModal()
        // }
        // debugger
        return this.props.currentUser ? this.personalGreeting() : this.sessionLinks();
    }
};


export default withRouter(Greeting);
