Vinstagram.Views.currentUserOptionsPostShow = Backbone.View.extend({

  template: JST['posts/delete_button'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

})
