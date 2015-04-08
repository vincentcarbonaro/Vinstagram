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

      this.$el.find('.delete-X').text("()")
      this.model.destroy({});
  }

});
