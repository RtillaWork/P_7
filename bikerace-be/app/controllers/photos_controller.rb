class PhotosController < ApplicationController
  def index
    @photo_tags = FlikrPhotoTag.all
    # respond_to do |format|
    #     format.json do  @photo_tags = FlikrPhotoTag.all
    #     # render json: @photos
    #     end
    # end
  end
end
