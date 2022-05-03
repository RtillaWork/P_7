class Event < ApplicationRecord
  has_many :riders
  has_many :flikr_photo_tags
  has_many :slogan_submissions

  validates :date, :numberOfParticipants, presence: true
end
