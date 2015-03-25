Vinstagram.Views.FeedItem = Backbone.View.extend({

  tagName: 'li',

  template: JST['posts/feed_item'],

  events: {
    'click .toggle_like': 'toggleLike',
    'submit .comment-form': 'addComment'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      post: this.model
    });

    this.$el.html(content);

    if (this.model.comments().length != 0 || this.model.get('text')){
      this.$el.find('.feed-item-text').toggle();
    }

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

  addComment: function (event) {
    event.preventDefault();

    var formData = $(event.currentTarget).serializeJSON();
    var that = this;

    this.$el.find('.comment-submit').val("Posting..");
    this.$el.find('.comment-submit').prop('disabled', true);

    $.ajax({
      url: "api/comments",
      type: "POST",
      data: {
        post_id: this.model.id,
        body: formData.body
      },
      success: function () {
        that.model.fetch();
      }
    });
  }

})
