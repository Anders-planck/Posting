class User < ApplicationRecord
    has_secure_password 
    has_many :posts
    has_many :comments
    has_many :tags
    has_many :images
    has_one :avatar
    
    #mount_uploader :avatar , AvatarUploader
    
    validates :email, presence: true, uniqueness: true
    validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
    validates :password,length: {minimum:5}, if: -> {new_record? || !password.nil?}
    validates :numero, presence: true
end
