class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name #, default: 'Boulder Bike tour', null: false
      t.string :city #, default: 'Boulder'
      t.string :state #, default: 'Colorado'
      t.float :latitude #, default: 40.016573
      t.float :longitude #, default:  -105.286382
      t.datetime :date #, default: DateTime.new(2020, 04, 01,00, 00, 00 ),  null: false
      t.string :category #, default: 'Bike race'
      t.integer :numberOfParticipants #, default: 20, null: false
      t.text :description #, default: 'Annual Boulder, CO bike race'

      t.timestamps
    end
  end
end
