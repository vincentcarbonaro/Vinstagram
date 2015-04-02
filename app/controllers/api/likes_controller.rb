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
