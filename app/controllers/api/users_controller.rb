module Api
  class UsersController < ApiController

    def index
      # Using this for fetching the current user for settings!
      @user = current_user
      render :index
    end

    def show
      @user = User.includes(:posts).find(params[:id])
      render :show
    end

    def update
      @user = current_user

      @user.bio = (params[:user][:bio])
      @user.picture = (params[:user][:picture])

      if @user.save
        render json: @user
      else
        render json: @user.errors.full_messages, status: 422
      end

    end

    private
    def user_params
      params.require(:user).permit(:picture, :bio)
    end

  end
end
