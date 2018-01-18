Rails.application.routes.draw do
  post '/authentication/login' => 'authentication#login'
end
