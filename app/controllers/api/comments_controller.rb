module Api
  class CommentsController < ApiController

    def create
      @post = Post.where(id: params[:post_id]).first
      @comment = @post.comments.new(author_id: current_user.id, body: params[:body])
      @comment.save
      render json: @comment
    end

    def destroy
      @comment = Comment.where(id: params[:id]).first
      @comment.destroy if @comment.author == current_user || @comment.post.author == current_user
      render :json => {}
    end

  end
end
