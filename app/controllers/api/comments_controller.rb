class Api::CommentsController < ApplicationController

    def create 
        @comment = Comment.new(comment_params)
        if @comment.save 
            render "api/comments/show"
        end
    end

    def recording_comments 
        # debugger
        @recording = Recording.find(params[:recordingId])
    end

    def comment_params 
        params.require(:comment).permit(:body, :user_id, :content_type, :content_id)
    end
end