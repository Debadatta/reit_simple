class LoginForm
  attr_reader :email, :password, :user, :error, :account

  def initialize(params)
    @email = params[:email]
    @password = params[:password]
  end

  def authenticate
    true
  end
end
