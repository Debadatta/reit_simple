Rails.application.routes.draw do
  get 'home/index'
  get 'home/login'
  get 'home/signup'

  post '/authentication/login' => 'authentication#login'
  get '/authentication/identity' => 'authentication#identity'
  post '/authentication/signup' => 'registration#signup'
  get '/authentication/logout' => 'authentication#logout'
  root :to => "home#index"
end
