class UserMailer < ApplicationMailer
	def welcome_email(user)
    @user = user
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome to REITSImple')
  end

  def reset_notification(user)
    setup_email(user)
    @url = reset_url(user.reset_code)
    @subject = "Password reset link"
    send_email
  end

  def welcome(user)
    setup_email(user)
    @subject = 'Welcome to REITSImple'
    send_email
  end

  protected

  def setup_email(receiver, sender = nil)
    @recipients = "#{receiver.email}"
    @from = email_sender(sender)
    @sent_on = Time.now
    @user = receiver
  end
end
