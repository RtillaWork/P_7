class ContestController < ApplicationController

  def index
    @slogans = Event.first.slogan_submissions
  end

  def new
    @slogan_submission = SloganSubmission.new
  end

  def create
    @slogan_submission = Event.first.slogan_submissions.create(slogan_submission_params)

    # {"firstName":"myfirstname", "lastName":"myLASTNAME","email":"MYEMAIL@EMAIL.COM", "slogan":"HELLO SLOGAN"}
    render plain: @slogan_submission.inspect
    saved = @slogan_submission.save
    #p saved
  end

  def show
  end

  private

  def slogan_submission_params
    # {\"slogan_submission\":{\"firstName\":\"myfirstname\", \"lastName\":\"myLASTNAME\",\"email\":\"MYEMAIL@EMAIL.COM\", \"slogan\":\"HELLO SLOGAN\"}}
    # curl -d {"firstName":"myfirstname", "lastName":"myLASTNAME","email":"MYEMAIL@EMAIL.COM", "slogan":"HELLO SLOGAN"} -H "Content-Type: application/json" -X POST http://localhost:3001/contest
    params.require(:slogan_submission).permit(:firstName, :lastName, :email, :slogan)
  end

end
