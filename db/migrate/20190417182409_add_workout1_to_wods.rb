class AddWorkout1ToWods < ActiveRecord::Migration[5.2]
  def change
    add_column :wods, :workout1, :string
  end
end
