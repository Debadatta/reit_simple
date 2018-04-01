class AuthenticateUser
  prepend SimpleCommand

  def initialize(email, password, authenticated = false)
    @email = email
    @password = password
    @authenticated = authenticated
  end

  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  private

  attr_accessor :email, :password, :authenticated

  def user
    user = User.find_by_email(email)
    return user if user && (authenticated || user.authenticate(password))

    errors.add :user_authentication, 'This username or password is not valid'
    nil
  end
end
