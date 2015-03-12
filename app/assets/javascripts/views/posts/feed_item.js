Vinstagram.Views.FeedItem = Backbone.View.extend({

  tagName: 'li',

  template: JST['posts/feed_item'],

  render: function () {
    var content = this.template({
      post: this.model
    });
    this.$el.html(content);
    return this;
  }

})
