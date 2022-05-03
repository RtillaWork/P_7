class SloganSubmission < ApplicationRecord
  belongs_to :event
  validates :firstName, :lastName, :email, presence: true, length: { minimum: 2 }
  validates :slogan, presence: true, length: { minimum: 3, maximum: 50 }

end
