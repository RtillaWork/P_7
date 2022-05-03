class RidersController < ApplicationController
  def index
    @riders = Rider.all
    # render json: @riders
  end

  # def show
  #     render :index
  # end
end
