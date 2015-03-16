module Api
  class FollowsController < ApiController

    def create
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

  end
end
