ActiveRecord::Schema.define(version: 20171211193451) do
  enable_extension "plpgsql"

  class CreateBooks < ActiveRecord::Migration[5.2]
    def change
      create_table :books do |t|
        t.string :title
        t.string :author
        t.string :isbn
        t.string :rented_by, null:true
        t.date :due_date, null:true
        t.timestamps
      end
    end
  end

end
