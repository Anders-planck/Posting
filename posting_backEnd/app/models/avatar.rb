class Avatar < ApplicationRecord
  belongs_to :user

  include Rails.application.routes.url_helpers

  has_one_attached :image

  def avatar_url
    #Get the URL of the associated image
    image.attached? ? url_for(image) : nil
  end

end
