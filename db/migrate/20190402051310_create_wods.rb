class CreateWods < ActiveRecord::Migration[5.2]
  def change
    create_table :wods do |t|
      t.string :title
      t.date :date
      t.string :workout

      t.timestamps
    end
  end
end
