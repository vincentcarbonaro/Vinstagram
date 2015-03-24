Vinstagram.Views.PostShow = Backbone.View.extend({

  template: JST['posts/post_show'],

  tagName: 'section',

  className: 'indy-post-show-backdrop',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'click .destroy': 'destroyPost',
    'click .toggle_like': 'toggleLike',
    'submit .comment-form': 'addComment'
  },

  render: function () {
    var content = this.template({
      post: this.model
    });
    this.$el.html(content);

    if (this.model.get('is_current_user')) { this.currentUserOptionsPostShow() }

    return this;
  },

  currentUserOptionsPostShow: function () {
    var view = new Vinstagram.Views.currentUserOptionsPostShow();
    this.$el.find('.user_options').append(view.render().$el);
  },

  destroyPost: function (event) {
    this.model.destroy();
    Backbone.history.navigate('', {trigger :true})
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

});
