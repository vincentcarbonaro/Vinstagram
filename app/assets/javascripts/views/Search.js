Vinstagram.Views.Search = Backbone.View.extend({

  template: JST["searches/search"],

  tagName: "section",

  className: "search-backdrop",

  initialize: function () {
    this.searchResults = new Vinstagram.Collections.SearchResults();
    this.listenTo(this.searchResults, 'sync', this.render)
  },

  events: {
    'submit .users-search': 'searchForUsers',
    'submit .tags-search': 'searchForTags'
  },

  render: function () {
    var content = this.template({
      collection: this.searchResults
    });
    this.$el.html(content);
    this.renderSearchResults();
    return this;
  },

  searchForUsers: function (event){
    event.preventDefault();
    
    this.searchResults._query = this.$(".query").val();
    this.searchResults.fetch({
      data: {
        query: this.searchResults._query
      }
    });
  },

  searchForTags: function (event) {
    event.preventDefault();
    alert('feature-not-yet-implemented');
  },

  renderSearchResults: function () {
    var container = this.$(".search-results");

    var that = this;
    this.searchResults.each(function (model) {
      var template = JST["searches/search_item"]
      container.append(template({
        user: model
      }))
    });
  }

})
