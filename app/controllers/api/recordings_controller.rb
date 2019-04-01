class Api::RecordingsController < ApplicationController 
    
    def create 
        @recording = Recording.new(recording_params)
        @recording.user_id = current_user.id 
        if @recording.save
            render :show
        else 
            render json: @recording.errors.full_messages, status: 422 
        end
    end

    def index 
        @user = current_user 
        render "api/recordings/index"
    end 

    def recording_params 
        params.require(:recording).permit(:title, :description)
    end

end