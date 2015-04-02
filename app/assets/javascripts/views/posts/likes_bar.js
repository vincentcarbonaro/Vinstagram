Vinstagram.Views.LikesBar = Backbone.CompositeView.extend({

  template: JST['posts/likes_bar'],

  initialize: function () {
    this.listenTo(this.model, 'change', this.render)
  },

  events: {
    'click .toggle_like': 'toggleLike',
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

    this.$el.find('.like-icon').attr("class", "pending-like")

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

});
