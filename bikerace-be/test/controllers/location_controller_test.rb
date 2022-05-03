require 'test_helper'

class LocationControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end

  def setup
    @riders = Rider.all
    @event = Event.first
  end

  test "should get location" do
    get locations_url
    assert_response :success
  end
end
