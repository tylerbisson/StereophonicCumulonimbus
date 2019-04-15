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
            let commentBodies = comments.map(comment => 
                <h1 key={comment.id}>{comment.body}</h1>
            )
            return (
                <ul>
                    {commentBodies}
                </ul>
            )
        } else {
            return(null);
        }
    }
}

const msp = (state, ownProps) => {
    return {
    }
}

const mdp = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment)),
    }
}

export default connect(msp, mdp)(CommentIndex);
