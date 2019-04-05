class Api::RecordingsController < ApplicationController 

    def show 
        # debugger 
        @recording = Recording.find(params[:id])
        @user = User.find_by(id: @recording.user_id)
        render "api/recordings/show"
    end
    
    def create 
        @recording = Recording.new(recording_params)
        if (current_user)
            @recording.user_id = current_user.id;
        end

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

    def splash_recordings 
        @splash_recordings = []
        @splash_recordings << Recording.first
        i = @splash_recordings[0].id
        while i < @splash_recordings[0].id + 12
           @splash_recordings << Recording.find(i)
           i += 1
        end

        @splash_recordings_users = @splash_recordings.map do |recording|
            User.find_by(id: recording.user_id)
        end
        render "api/recordings/splash_recordings"
    end

    def recording_params 
        params.require(:recording).permit(:title, :description, :audio, :art, :user_id)
    end

end