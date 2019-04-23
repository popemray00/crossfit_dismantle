class AddWorkout3ToWods < ActiveRecord::Migration[5.2]
  def change
    add_column :wods, :workout3, :string
  end
end
