class CreateSloganSubmissions < ActiveRecord::Migration[5.2]
  def change
    create_table :slogan_submissions do |t|
      t.string :firstName, null: false
      t.string :lastName, null: false
      t.string :email, null: false
      t.string :slogan, null: false, limit: 50 #postgresql can't limit text as per its definition, need to use string data type here
      t.references :event, foreign_key: true

      t.timestamps
    end
  end
end
