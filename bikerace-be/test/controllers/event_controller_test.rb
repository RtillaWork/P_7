require 'test_helper'

class EventControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  def setup
    @event = Event.first
  end

  # test "First event exists" do
  #   assert @event.nil?
  # end

  # test "Event deadline matches organizer's deadline" do
  #   assert_equal @event.date, DateTime("")
  # end

  # test "Event number of participatns is = to 20" do
  #   assert_equalt @event.numberOfParticipants, 20
  # end 

  test "should get event" do
    get root_url
    assert_response :success
  end

end
