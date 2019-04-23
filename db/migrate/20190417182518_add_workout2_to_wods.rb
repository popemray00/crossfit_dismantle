class AddWorkout2ToWods < ActiveRecord::Migration[5.2]
  def change
    add_column :wods, :workout2, :string
  end
end
