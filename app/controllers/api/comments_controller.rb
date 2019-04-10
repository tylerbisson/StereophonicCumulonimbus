class Api::CommentsController < ApplicationController

    def create 
        @comment = Comment.new(comment_params)
    end

    def comment_params 
        params.require(:comment).permit(:body, :user_id, :content_id)
    end
end