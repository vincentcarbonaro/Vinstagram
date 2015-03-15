Vinstagram.Collections.SearchResults = Backbone.Collection.extend({

  url: "api/search",

  model: Vinstagram.Models.User,

  parse: function (response) {
    return response.results;
  }

})
