require 'test_helper'

class PhotosControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end

  test "should get photos" do
    get photos_url
    assert_response :success
  end
end
