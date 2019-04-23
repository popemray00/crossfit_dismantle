class AddWorkout7ToWods < ActiveRecord::Migration[5.2]
  def change
    add_column :wods, :workout7, :string
  end
end
