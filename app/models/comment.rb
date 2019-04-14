class Comment < ApplicationRecord 

    validates :body, :content_type, presence: true 

    belongs_to :user 

    belongs_to :content, polymorphic: true 

    # has_many :comments, as: :content 
end