class SocialProvider < ActiveRecord::Base
  belongs_to :user, optional: true
  validates :provider, uniqueness: { scope: :user_id }
end
