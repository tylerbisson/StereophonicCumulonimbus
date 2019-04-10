class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false 
      t.integer :user_id, null: false 
      t.integer :recording_id, null: false 
      t.integer :parent_comment_id,
      t.timestamps 
    end
    add_index :comments, :user_id
    add_index :comments, :recording_id
    add_index :comments, :parent_comment_id
  end
end
