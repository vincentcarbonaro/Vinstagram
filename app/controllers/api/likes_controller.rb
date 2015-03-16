module Api
  class LikesController < ApiController

    def create

      @like = Like.where({
        liker_id: current_user.id,
        post_id: params[:post_id]
      }).first

      if @like.try(:id)
        Like.delete(@like)
        render json: {}
      else
        @like = Like.new({
        liker_id: current_user.id,
        post_id: params[:post_id]
        })
        @like.save
        render json: @like
      end

    end

  end
end


# @follow = Follow.where({follower_id: current_user.id, followee_id: params[:followee_id]}).first;
#
# if @follow.try(:id)
#   Follow.delete(@follow)
#   render json: {}
# else
#   @follow = current_user.follows.new({follower_id: current_user.id, followee_id: params[:followee_id]})
#   @follow.save
#   render json: @follow
# end
