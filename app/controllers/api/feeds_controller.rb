module Api
  class FeedsController < ApplicationController

    def show
      # This Should Be current_user.followees!!
      # render :show
      @users = User.all
      render json: @users
    end

  end
end
