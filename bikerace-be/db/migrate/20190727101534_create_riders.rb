class CreateRiders < ActiveRecord::Migration[5.2]
  def change
    create_table :riders do |t|
      t.string :firstName, null: false
      t.string :lastName, null: false
      t.string :cityOfOrigin, null: false
      t.string :stateOfOrigin, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.references :event, foreign_key: true

      t.timestamps
    end
  end
end
