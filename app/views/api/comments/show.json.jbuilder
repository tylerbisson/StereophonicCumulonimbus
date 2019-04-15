json.extract! @comment, :id, :body, :user_id, :content_type, :content_id

json.user do 
    json.set! @comment.user_id do
        json.extract! @comment.user, :id, :username 
        json.portraitUrl url_for(@comment.user.portrait)
    end
end
