class Api::RecordingsController < ApplicationController 
    
    def create 
        # debugger
        @recording = Recording.new(recording_params)
        @recording.user_id = current_user.id;
        # debugger
        if @recording.save
            # debugger
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
        params.require(:recording).permit(:title, :description, :audio, :art)
    end

end