Rails.application.routes.draw do
  get 'cards/index'

  get 'lists/create'

  get 'boards/index'

  devise_for :users
  root 'static_pages#index'

  scope :api do
    scope :v1 do
      resources :boards do
        resources :lists, only: [:create, :index, :destroy]
      end

      resources :cards, only: [:index, :create]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
