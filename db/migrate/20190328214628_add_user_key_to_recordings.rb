class AddUserKeyToRecordings < ActiveRecord::Migration[5.2]
  def change
    add_column :recordings, :user_id, :integer
  end
end
