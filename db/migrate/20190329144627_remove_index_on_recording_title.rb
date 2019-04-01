class RemoveIndexOnRecordingTitle < ActiveRecord::Migration[5.2]
  def change
    remove_index :recordings, :title
  end
end
