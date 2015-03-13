Vinstagram.Views.currentUserOptionsUserShow = Backbone.View.extend({

  template: JST['users/current_user_options_user_show'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

})
