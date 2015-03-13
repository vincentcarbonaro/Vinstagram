module Api
  class FollowsController < ApiController

    def create
      @follow = current_user.follows.new(follow_params)

      if @follow.save
        render json: @follow
      else
        render json: @follow.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index

      @follow = current_user.follows.where(follow_params)

      if(@follow)
        @follow.destroy
        render json: @follow
      else
        @follow = current_user.follows.new(follow_param)
        render json: @follow
      end

    end

    private
    def follow_params
      params.require(:follow).permit(:followee_id)
    end

  end
end
