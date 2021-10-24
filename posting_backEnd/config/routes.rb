Rails.application.routes.draw do
  resources :avatars
  resources :images
  namespace :api do
    namespace :v1 do 
      resources :posts do 
        resources :comments
        resources :tags
        resources :images
      end
      resources :images
      resources :users, params: :_username do 
        resources :avatar
      end
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post 'auth/login', to: "authentication#login"
  #get '/*a', to: 'application#not_found'
end
