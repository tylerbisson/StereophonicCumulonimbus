class EditCommentsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :recording_id
    remove_column :comments, :parent_comment_id
    add_column :comments, :content_id, :integer
    add_column :comments, :content_type, :string
    add_index :comments, :content_id
  end
end
