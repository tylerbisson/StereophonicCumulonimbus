    json.user do 
        json.extract! user, :id, :username, :recording_ids
    end 

    json.recordings do 
        user.recordings.each do |recording|
            json.set! recording.id do
                json.extract! recording, :id, :title
            end
        end
    end
