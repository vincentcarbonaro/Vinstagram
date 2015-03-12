module Api
  class PostsController < ApiController

    def create
      @post = current_user.posts.new(post_params)

      if @post.save
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    # will always be used to show all the posts of one user
    def index
      @user = User.find(params[:id])
      @posts = current_user.posts
      render json: @posts
    end

    # will always be used to show a SINGLE post
    def show
      @post = Post.find(params[:id]);
      render json: @post
    end

    private
    def post_params
      params.require(:post).permit(:text)
    end

  end
end
