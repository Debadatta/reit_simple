Rails.application.routes.draw do
  get 'home/index'

  post '/authentication/login' => 'authentication#login'
  root :to => "home#index"
end
