Vinstagram.Views.PostShow = Backbone.CompositeView.extend({

  template: JST['posts/post_show'],

  tagName: 'section',

  className: 'indy-post-show-backdrop',

  render: function () {
    var content = this.template({
      posts: this.collection
    });
    this.$el.html(content)

    var feedItem = new Vinstagram.Views.FeedItem({
      model: this.model
    })
    this.addSubview(".post-show-item", feedItem)

    return this;
  },

});
