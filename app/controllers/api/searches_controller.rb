module Api
  class SearchesController < ApiController

    def index
      @search_results = User.search(params[:query])
    end

  end
end
