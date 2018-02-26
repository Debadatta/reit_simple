class User < ApplicationRecord
  has_secure_password

  has_many :phone_numbers
  belongs_to :user_interest, optional: true
  belongs_to :user_ref, optional: true

  accepts_nested_attributes_for :phone_numbers

  validates_presence_of     :password,                   :if => :password_required?
  validates_presence_of     :password_confirmation,      :if => :password_required?
  validates_confirmation_of :password,                   :if => :password_required?
  validates_length_of       :password, :within => 6..40, :if => :password_required?

  attr_accessor  :password_confirmation
  attr_reader    :password

  validates_presence_of :first_name, :last_name, :email

  after_save :send_reset_notification, :if => :recently_reset?
  before_create :update_login_info

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

  def welcome
    UserMailer.welcome(self).deliver_now
  end

  def update_login_info
    self.last_login_at = DateTime.now
    self.login_count = login_count + 1;
  end
end
