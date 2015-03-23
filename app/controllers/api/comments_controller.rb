module Api
  class CommentsController < ApiController

    def create
      sleep(2)
      @post = Post.where(id: params[:post_id]).first
      @comment = @post.comments.new(author_id: current_user.id, body: params[:body])
      @comment.save
      render json: @comment
    end

  end
end
