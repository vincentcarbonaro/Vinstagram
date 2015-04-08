Vinstagram.Views.Comment = Backbone.View.extend({

  template: JST['posts/comment'],

  events: {
    'click .delete-x': 'deleteComment',
  },

  render: function () {
     var content = this.template({
      comment: this.model
    })
    this.$el.html(content);
    return this;
  },

  deleteComment: function (event) {
    event.preventDefault();

    if (this.model.attributes.is_current_user) {
      // this.$el.find('.deladfgdfete-post').text(" ..deleting.. ")
      this.model.destroy({});
    }
  }


});
