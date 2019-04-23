class AddWorkout5ToWods < ActiveRecord::Migration[5.2]
  def change
    add_column :wods, :workout5, :string
  end
end
