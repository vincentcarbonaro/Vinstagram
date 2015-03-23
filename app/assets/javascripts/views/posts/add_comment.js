Vinstagram.Views.AddComment = Backbone.View.extend({

  template: JST['posts/add_comment'],

  events: {
    'submit form': 'addComment',
  },

  render: function () {
    var content = this.template;
    this.$el.html(content);
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
      }
    });
  },

});
