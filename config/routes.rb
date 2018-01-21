Rails.application.routes.draw do
  post '/authentication/login' => 'authentication#login'
  get '/authentication/identity' => 'authentication#identity'
  post '/authentication/signup' => 'registration#signup'
  get '/authentication/logout' => 'authentication#logout'

  resources :user_interests, only: [:index]
  resources :user_refs, only: [:index]
end
