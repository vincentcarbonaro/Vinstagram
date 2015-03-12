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
      @users = User.all
      render json: @users
    end

    # will always be used to show a SINGLE post
    # but you also need to fetch the user (jbuilder)
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
      params.require(:post).permit(:text)
    end

  end
end
