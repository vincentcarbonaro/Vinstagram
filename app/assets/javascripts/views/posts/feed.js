Vinstagram.Views.Feed = Backbone.View.extend({

  template: JST['posts/feed'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      posts: this.collection
    });
    this.$el.html(content)

    if (this.collection.length === 0) {
      this.$el.find('.feed').append("No Posts Available!")
    } else {
      this.collection.each( function (post) {
        var view = new Vinstagram.Views.FeedItem({
          model: post
        })
        this.$el.find('.feed').append(view.render().$el)
      }.bind(this));
    }

    return this;
  }

});
