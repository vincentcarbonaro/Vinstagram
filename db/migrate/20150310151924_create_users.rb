class CreateUsers < ActiveRecord::Migration

  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token
      t.timestamps
    end

    add_index :users, :id

  end

end
