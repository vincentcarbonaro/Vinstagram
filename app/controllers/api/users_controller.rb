module Api
  class UsersController < ApiController

    def index
      # I don't think this is used?
      # could use for searches?
      # @users = User.all
      # render json: @users
    end

    def show
      @user = User.includes(:posts).find(params[:id])
      render :show
    end

    def update
      @user = current_user

      @user.picture = (params[:user][:picture])
      if @user.save
        render json: @user
      else
        render json: @user.errors.full_messages, status: 422
      end

    end

    private
    def user_params
      params.require(:user).permit(:picture)
    end

  end
end
