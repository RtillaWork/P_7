require 'test_helper'

class RidersControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end

  test "should get riders" do
    get riders_url
    assert_response :success
  end

end
