# json.array! @slogan_submissions, partial: "slogan_submissions/slogan_submission", as: :slogan_submission

json.extract! @slogan_submission, :id, :created_at, :updated_at, :firstName, :lastName, :email, :slogan

# json.array! @slogans do |slogan|
#     json.firstName slogan.firstName
#     json.lastName slogan.lastName
#     json.email slogan.email
#     json.slogan slogan.slogan
# end