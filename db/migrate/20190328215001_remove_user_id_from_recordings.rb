class RemoveUserIdFromRecordings < ActiveRecord::Migration[5.2]
  def change
    remove_column :recordings, :user_id
  end
end
