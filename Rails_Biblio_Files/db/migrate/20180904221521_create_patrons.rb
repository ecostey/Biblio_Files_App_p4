class CreatePatrons < ActiveRecord::Migration[5.2]
  def change
    create_table :patrons do |t|
      t.string :name, null:false
      t.string :email, null:false

      t.timestamps
    end
    add_index :patrons, :name, unique: true
    add_index :patrons, :email, unique: true
  end
end
