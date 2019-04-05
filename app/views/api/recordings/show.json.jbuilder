json.extract! @recording, :id, :title, :description, :user_id
json.audioUrl url_for(@recording.audio)
json.artUrl url_for(@recording.art)
json.username @user.username
json.portraitUrl url_for(@user.portrait)