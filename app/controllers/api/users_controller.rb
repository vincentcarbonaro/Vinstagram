module Api
  class UsersController < ApiController

    def index
      @users = User.all
      render json: @users
    end

    def show
      @user = User.includes(:posts).find(params[:id])
      render :show
    end

    def update
      render :json => {}
    end

    # private
    # def user_params
    #   params.require(:user).permit(:picture)
    # end


  end
end


# create_table "users", force: :cascade do |t|
#   t.string   "username",             null: false
#   t.string   "email",                null: false
#   t.string   "password_digest",      null: false
#   t.string   "session_token"
#   t.datetime "created_at"
#   t.datetime "updated_at"
#   t.string   "picture_file_name"
#   t.string   "picture_content_type"
#   t.integer  "picture_file_size"
#   t.datetime "picture_updated_at"
# end
