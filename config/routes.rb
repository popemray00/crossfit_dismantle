Rails.application.routes.draw do
  root to: redirect('/wods')

  get 'wods', to: 'wods#index'
  get 'wods/new', to: 'wods#index'
  get 'wods/:id', to: 'wods#index'
  get 'wods/:id/edit', to: 'wods#index'

  namespace :api do
    namespace :v1 do
      resources :wods
    end
end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
