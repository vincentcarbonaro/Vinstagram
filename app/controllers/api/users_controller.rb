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

    private
    def user_params
      params.require(:user).permit(:picture)
    end

  end
end
