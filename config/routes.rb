Rails.application.routes.draw do
  scope :api do
    post '/authentication/login' => 'authentication#login'
    get '/authentication/identity' => 'authentication#identity'
    post '/authentication/signup' => 'registration#signup'
    get '/authentication/logout' => 'authentication#logout'

    match '/forgot' => 'authentication#forgot', :as => :forgot, :via => :post
    match '/reset/:reset_code' => 'authentication#reset', :as => :reset, :via => [:get, :post]
    match '/setup/:reset_code' => 'authentication#setup', :as => :setup, :via => [:get, :post]
    match '/users/profile' => 'users/profile', :as => :profile, :via => [:get, :put]
    post '/omniauth_callbacks/login'
    post '/omniauth_callbacks/signup'
    post '/omniauth_callbacks/connect'

    resources :user_interests, only: [:index]
    resources :user_refs, only: [:index]
    resources :countries, only: [:index]
    resource :email_preference_settings, only: [:show, :update]
    resource :email_notification_settings, only: [:show, :update]
    resources :deal_categories, only: [:index, :create]

    scope :user do
      resource :company, only: [:show, :update]
    end
    #mount MailPreview => 'mail_view' if Rails.env.development?
  end
end
