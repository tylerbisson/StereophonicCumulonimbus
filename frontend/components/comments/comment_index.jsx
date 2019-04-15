import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comments_actions';

class CommentIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.comments;
    }

    render(){
        if (this.props.comments){
            let comments = Object.values(this.props.comments);
            let commentItems = comments.map(comment => {
                let users = Object.values(this.props.users);
                let user = users.filter(user => user["id"] === parseInt(comment.user_id))[0];
                let userInfo = <></>
                if (user){
                    userInfo =
                        <>
                            <h2 className="comment-user-username">{user.username ? user.username : ""}</h2>
                            <img className="comment-user-portrait" src={user.portraitUrl} />
                        </>
                }
                return(
                    <div className="comment-item" key={comment.id}>
                        <h1 className="comment-body">{comment.body}</h1>
                        {userInfo}
                    </div>
                )
            }
            )
            return (
                <ul className="comments-index">
                    {commentItems}
                </ul>
            )
        } else {
            return(null);
        }
    }
}

const msp = state => {
    let users = state.entities.users;
    return {
        users: users ? users : { users: "" }
    }
}

const mdp = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment)),
    }
}

export default connect(msp, mdp)(CommentIndex);
