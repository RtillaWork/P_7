class CreateFlikrPhotoTags < ActiveRecord::Migration[5.2]
  def change
    create_table :flikr_photo_tags do |t|
      t.string :hashtag, null: false
      t.references :event, foreign_key: true

      t.timestamps
    end
  end
end
