class CreateRecordings < ActiveRecord::Migration[5.2]
  def change
    create_table :recordings do |t|
      t.string :title, null: false 
      t.string :description

      t.timestamps
    end
    add_index :recordings, :title, unique: true 
  end
end
