class Recording < ApplicationRecord

    validates :title, presence: true

    belongs_to :user

    has_one_attached :art 
    has_one_attached :audio 

    has_many :comments, as: :content 
end