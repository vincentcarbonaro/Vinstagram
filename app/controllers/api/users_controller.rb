module Api
  class UsersController < ApiController

    def index
      @users = User.all
      fail
      render json: @users
    end

  end
end
