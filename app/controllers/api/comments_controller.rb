module Api
  class CommentsController < ApiController

    def create
      @post = Post.where(id: params[:post_id]).first
      @comment = @post.comments.new(author_id: current_user.id, body: params[:body])
      @comment.save
      render json: @comment
    end

    def destroy
      @comment = Comment.where(id: params[:id])
      Comment.destroy(@comment) if @comment
      render :json => {}
    end

  end
end
