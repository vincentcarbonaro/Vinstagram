module Api
  class ApiController < ApplicationController

    def index
      # @user = User.find(params[:id])
      # render :show
      @users = user.all
      render json: @users
    end
    
    private
    def user_params
      params.require(:user)
    end

  end
end
