Vinstagram.Views.Search = Backbone.View.extend({

  template: JST["searches/search"],

  initialize: function () {
    this.searchResults = new Vinstagram.Collections.SearchResults();
    this.listenTo(this.searchResults, 'sync', this.render)
  },

  events: {
    'click .search': 'search',
  },

  render: function () {
    var content = this.template({
      collection: this.searchResults
    });
    this.$el.html(content);
    this.renderSearchResults();
    return this;
  },

  search: function (event){
    this.searchResults._query = this.$(".query").val();
    this.searchResults.fetch({
      data: {
        query: this.searchResults._query
      }
    });
  },

  renderSearchResults: function () {
    var container = this.$(".search-results");

    var that = this;

    this.searchResults.each(function (model) {
      var template = JST["searches/user_item"]
      container.append(template({user: model}))
    });


  }


})
