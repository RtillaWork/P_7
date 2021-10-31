# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_27_102058) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string "name"
    t.string "city"
    t.string "state"
    t.float "latitude"
    t.float "longitude"
    t.datetime "date"
    t.string "category"
    t.integer "numberOfParticipants"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "flikr_photo_tags", force: :cascade do |t|
    t.string "hashtag", null: false
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_flikr_photo_tags_on_event_id"
  end

  create_table "riders", force: :cascade do |t|
    t.string "firstName", null: false
    t.string "lastName", null: false
    t.string "cityOfOrigin", null: false
    t.string "stateOfOrigin", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_riders_on_event_id"
  end

  create_table "slogan_submissions", force: :cascade do |t|
    t.string "firstName", null: false
    t.string "lastName", null: false
    t.string "email", null: false
    t.string "slogan", limit: 50, null: false
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_slogan_submissions_on_event_id"
  end

  add_foreign_key "flikr_photo_tags", "events"
  add_foreign_key "riders", "events"
  add_foreign_key "slogan_submissions", "events"
end
