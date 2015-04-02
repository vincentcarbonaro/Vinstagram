Vinstagram.Views.AddComment = Backbone.View.extend({

  template: JST["posts/add_comment"],

  events: {
    'submit .comment-form':'addComment'
  },

  render: function () {
    this.$el.html(this.template);
    return this;
  },

  addComment: function (event) {
    event.preventDefault();

    var formData = $(event.currentTarget).serializeJSON();
    var that = this;

    this.$el.find('.add-comment').val("Posting..");
    this.$el.find('.add-comment').prop('disabled', true);

    $.ajax({
      url: "api/comments",
      type: "POST",
      data: {
        post_id: this.model.id,
        body: formData.body
      },
      success: function () {
        that.model.fetch();
        that.render();
      }
    });
  },

})
