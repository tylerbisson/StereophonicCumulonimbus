@splash_recordings.each do |recording|
    json.set! recording.id do
        json.extract! recording, :id, :title, :user_id
        json.audioUrl url_for(recording.audio)
        json.artUrl url_for(recording.art)
        json.username (@splash_recordings_users.select {|user| user.id == recording.user_id})[0].username
    end
end
