@user.recordings.each do |recording|
    json.set! recording.id do
        json.extract! recording, :id, :title
    end
end
