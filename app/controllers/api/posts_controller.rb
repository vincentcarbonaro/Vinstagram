module Api
  class PostsController < ApiController

    def index
      @posts = Post.get_posts(current_user)
      render :index
    end

    def create
      @post = current_user.posts.new(post_params)

      @post.picture = (params[:picture])

      if @post.save
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @post = Post.find(params[:id]);
      render :show
    end

    def destroy
      @post = Post.find(params[:id])
      @post.destroy if @post
      render :json => {}
    end

    private
    def post_params
      params.require(:post).permit(:text, :picture)
    end

  end
end
