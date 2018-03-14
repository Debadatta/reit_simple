Rails.application.routes.draw do
  scope :api do
    post '/authentication/login' => 'authentication#login'
    get '/authentication/identity' => 'authentication#identity'
    post '/authentication/signup' => 'registration#signup'
    get '/authentication/logout' => 'authentication#logout'

    match '/forgot' => 'authentication#forgot', :as => :forgot, :via => :post
    match '/reset/:reset_code' => 'authentication#reset', :as => :reset, :via => [:get, :post]
    match '/setup/:reset_code' => 'authentication#setup', :as => :setup, :via => [:get, :post]
    post '/omniauth_callbacks/login'
    post '/omniauth_callbacks/signup'

    resources :user_interests, only: [:index]
    resources :user_refs, only: [:index]

    #mount MailPreview => 'mail_view' if Rails.env.development?
  end
end
