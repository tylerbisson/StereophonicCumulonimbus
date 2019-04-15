json.recording do 
    json.extract! @recording, :id, :title, :description, :user_id
    json.audioUrl url_for(@recording.audio)
    json.artUrl url_for(@recording.art)
    json.username @user.username
    json.portraitUrl url_for(@user.portrait)
end

@recording.comments.each do |comment|
    json.comments do 
        json.set! comment.id do
            json.extract! comment, :body, :user_id, :content_id 
        end
    end
    json.users do 
        json.set! comment.user_id do
            user = comment.user 
            json.extract! user, :id, :username 
            json.portraitUrl url_for(user.portrait)
        end
    end
end

