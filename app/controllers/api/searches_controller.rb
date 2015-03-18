module Api
  class SearchesController < ApiController

    def index
      @search_results = User.user_search(params[:query])
      render :index
    end

  end
end
