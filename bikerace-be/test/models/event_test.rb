require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  def setup
    @event = Event.first
  end

  test "First event exists" do
    assert_not_nil @event
  end

  test "Event is valid" do
    assert @event.valid?
  end

end
