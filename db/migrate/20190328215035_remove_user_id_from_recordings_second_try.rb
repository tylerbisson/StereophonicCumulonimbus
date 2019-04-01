class RemoveUserIdFromRecordingsSecondTry < ActiveRecord::Migration[5.2]
  def change
    add_column :recordings, :user_id, :integer, null: false
    add_index :recordings, :user_id
  end

end
