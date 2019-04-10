class Comment < ApplicationRecord 

    validates :body, presence: true 

    belongs_to :user 

    belongs_to :content, polymorphic: true 

    has_many :comments, as: :content 
end