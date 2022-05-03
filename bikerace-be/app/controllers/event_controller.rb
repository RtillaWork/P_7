class EventController < ApplicationController
  def show
    @event = Event.first
    render json: @event
  end
end
