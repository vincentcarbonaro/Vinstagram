Rails.application.routes.draw do

  root to: "static_pages#root"

  resources :users
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :posts
    resource :feed
    resources :users
    resources :follows
    resources :likes
    resources :comments
    get "search", to: "searches#index"
  end

end
