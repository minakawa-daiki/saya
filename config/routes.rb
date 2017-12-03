Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'auth/:provider/callback', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'

  root 'login#login'
  get 'top', to: 'home#index'
  get 'show', to: 'home#show'

  get 'csv', to: 'csv_manage#index'
  post 'upload', to: 'csv_manage#upload'
  post 'delete', to: 'csv_manage#delete'

  get 'recent', to: 'score#index'
  post 'recent', to: 'score#search'

end
