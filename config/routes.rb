Rails.application.routes.draw do
  get 'home/index'
  get 'home/login'
  get 'home/signup'

  post '/authentication/login' => 'authentication#login'
  root :to => "home#index"
end
