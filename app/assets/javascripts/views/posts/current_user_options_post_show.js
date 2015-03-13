Vinstagram.Views.currentUserOptionsPostShow = Backbone.View.extend({

  template: JST['posts/current_user_options_post_show'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

})
