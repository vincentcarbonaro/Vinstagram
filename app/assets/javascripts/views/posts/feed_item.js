Vinstagram.Views.FeedItem = Backbone.View.extend({

  tagName: 'li',

  template: JST['posts/feed_item'],

  events: {
    'click .toggle_like': 'toggleLike',
    'click .add_comment': 'addComment'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      post: this.model
    });
    
    this.$el.html(content);
    return this;
  },

  toggleLike: function () {
    var that = this;

    $.ajax({
      url: "api/likes",
      type: "POST",
      data: {
        post_id: this.model.id
      },
      success: function () {
        that.model.fetch();
      },
    });
  },

  addComment: function () {
    var view = new Vinstagram.Views.AddComment({
      model: this.model
    });
    this.$el.find('.comment').html(view.render().$el)
  }

})
