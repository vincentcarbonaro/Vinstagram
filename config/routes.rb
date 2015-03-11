Rails.application.routes.draw do

  root to: "static_pages#root"

  resources :users, only: [:new, :create, :edit, :update, :destroy]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    
  end

end
