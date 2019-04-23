class AddWorkout6ToWods < ActiveRecord::Migration[5.2]
  def change
    add_column :wods, :workout6, :string
  end
end
