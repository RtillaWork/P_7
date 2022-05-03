require 'test_helper'

class ContestControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  test "should post contest" do
    post contest_url, params: { :slogan_submission => { :firstName => "myfirstname", :lastName => "myLASTNAME", :email => "MYEMAIL@EMAIL.COM", :slogan => "HELLO SLOGAN" } }
    assert_response :success
  end
end
