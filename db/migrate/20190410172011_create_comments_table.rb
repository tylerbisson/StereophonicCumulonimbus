class CreateCommentsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false 
      t.integer :user_id, null: false 
      t.integer :content_id
      t.string :content_type
      t.timestamps 
    end
    add_index :comments, :user_id
    add_index :comments, :content_id
  end
end
