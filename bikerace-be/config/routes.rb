Rails.application.routes.draw do

  # resource :event, only: [:show], defaults: {format: 'json'}
  # resource :contest, only: [:new, :create,:show], defaults: {format: 'json'}
  # resource :location, only: [:index], defaults: {format: 'json'}
  # resource :photos, only: [:index], defaults: {format: 'json'}
  # resource :riders, only: [:index], defaults: {format: 'json'}

  # namespace api do
  # get '/home', to: 'event#show', defaults: {format: 'json'}  
  get '/locations', to: 'location#index', defaults: { format: 'json' }
  get '/photos', to: 'photos#index', defaults: { format: 'json' }
  get '/riders', to: 'riders#index', defaults: { format: 'json' }
  #get '/contest', to: 'contest#new',  defaults: {format: 'json'}
  post '/contest', to: 'contest#create', defaults: { format: 'json' }
  get '/contest', to: 'contest#index', defaults: { format: 'json' } #debugging
  get '/contest/:id', to: 'contest#show', defaults: { format: 'json' }

  root 'event#show', defaults: { format: 'json' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
