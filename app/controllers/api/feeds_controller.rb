module Api
  class FeedsController < ApplicationController

    def show
      @users = User.all
      render json: @users
    end

  end
end
