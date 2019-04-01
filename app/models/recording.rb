class Recording < ApplicationRecord

    validates :title, :description, presence: true

    belongs_to :user

    has_one_attached :art 

    has_one_attached :audio 
end