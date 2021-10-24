class Image < ApplicationRecord
    belongs_to :user
    belongs_to :post
    include Rails.application.routes.url_helpers

    has_one_attached :image

    def image_url
        #Get the URL of the associated image
        image.attached? ? url_for(image) : nil
    end
end
