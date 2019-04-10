Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :recordings, only: [:create, :index, :show, :update, :destroy]
    resources :comments, only: [:create, :index, :show, :update, :destroy]
    resource :session, only: [:create, :destroy, :show]
    get '/splash_recordings', to: 'recordings#splash_recordings'
  end
  root "static_pages#root"
end
