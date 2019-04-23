class AddWorkout4ToWods < ActiveRecord::Migration[5.2]
  def change
    add_column :wods, :workout4, :string
  end
end
