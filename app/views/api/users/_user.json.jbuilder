    json.user do 
        json.extract! user, :id, :username, :recording_ids 
        json.portraitUrl url_for(user.portrait)
    end 

    json.recordings do 
        user.recordings.each do |recording|
            json.set! recording.id do
                json.extract! recording, :id, :title, :user_id
                json.artUrl url_for(recording.art)
                json.audioUrl url_for(recording.audio)
            end
        end
    end
