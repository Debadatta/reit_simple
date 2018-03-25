class User < ApplicationRecord
  has_secure_password

  has_many :phone_numbers, dependent: :destroy
  has_many :social_providers, dependent: :destroy
  belongs_to :user_interest, optional: true
  belongs_to :user_ref, optional: true

  accepts_nested_attributes_for :phone_numbers

  validates_presence_of     :password,                   :if => :password_required?
  validates_presence_of     :password_confirmation,      :if => :password_required?
  validates_confirmation_of :password,                   :if => :password_required?
  validates_length_of       :password, :within => 6..40, :if => :password_required?
  validates :email, uniqueness: true

  attr_accessor  :password_confirmation
  attr_reader    :password

  validates_presence_of :first_name, :last_name, :email

  after_save :send_reset_notification, :if => :recently_reset?
  before_create :set_login_info
  #after_create :send_welcome_mail

  def self.login_from_omniauth(auth, password)
    sp = SocialProvider.where(provider: auth["_provider"], uid: auth["_profile"]["id"]).first
    user = sp.try(:user)

    if sp
      if sp.token != auth["_token"]["access_token"]
        sp.update_attributes(token: auth["_token"]["access_token"])
        user.set_login_info
      end
    else
      user = User.find_by_email(auth["_profile"]["email"])
      if !user
        user = User.create_from_social(auth, password)
      else
        user.set_login_info
      end

      user.save
      user.create_social_provider(auth)
    end
    user
  end

  def self.signup_from_omniauth(auth, password)
    user = User.find_by_email(auth["_profile"]["email"])
    if !user
      user = User.create_from_social(auth, password)
      user.create_social_provider(auth)

      user.save
    end
    user
  end

  def self.create_from_social(auth, password)
    User.new.tap do |u|
      u.email = auth["_profile"]["email"]
      u.password = password
      u.password_confirmation = password
      u.first_name = auth["_profile"]["first_name"]
      u.last_name = auth["_profile"]["last_name"]
      u.save
    end
  end

  def create_social_provider(auth)
    self.social_providers.where(provider: auth["_provider"]).first_or_create(provider: auth["_provider"], uid: auth["_profile"]["id"], token: auth["_token"]["access_token"])
  end

  def password_required?
    !password.blank? || !password_confirmation.blank?
  end

  def full_name
    first_name + " " + last_name
  end

  def create_reset_code
    @reset = true
    self.reset_code = Digest::SHA1.hexdigest(Time.now.to_s.split(//).sort_by { rand }.join)
    save
  end

  def delete_reset_code
    self.attributes = {:reset_code => nil}
    save(:validate => false)
  end

  def recently_reset?
    @reset
  end

  def send_reset_notification
    UserMailer.reset_notification(self).deliver_now
  end

  def send_welcome_mail
    UserMailer.welcome(self).deliver_now
  end

  def set_login_info
    self.last_login_at = DateTime.now
    self.login_count = login_count + 1;
  end
end
