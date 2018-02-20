class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'

  def send_email
    to = ""

    [@recipients].flatten.each do |recipient|
      if recipient.respond_to?(:email_to)
        to << recipient.email_to
      elsif recipient.respond_to?(:email)
        to << recipient.email
      else
        to << recipient.to_s
      end
    end

    mail(:to => to, :from => @from, :subject => @subject, :reply_to => @reply_to, :cc => @cc, :bcc => @bcc)
  end

  def email_sender(user)
    from_name = "REITSimple Admin"

    "\"#{from_name}\" <no-reply@reitsimple.com>"
  end
end
