module Api
  class FollowsController < ApiController

    def create
      ##find this follow
      @follow = Follow.where({follower_id: current_user.id, followee_id: params[:followee_id]}).first;

      if @follow.try(:id)
        Follow.delete(@follow)
        render json: {}
      else
        @follow = current_user.follows.new({follower_id: current_user.id, followee_id: params[:followee_id]})
        @follow.save
        render json: @follow
      end

    end

    # def create
    #   @follow = current_user.follows.new(follow_params)
    #
    #   if @follow.save
    #     render json: @follow
    #   else
    #     render json: @follow.errors.full_messages, status: :unprocessable_entity
    #   end
    # end
    #
    # private
    # def follow_params
    #   params.require(:follow).permit(:followee_id)
    # end

  end
end
