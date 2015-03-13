Vinstagram.Views.CurrentUserOptions = Backbone.View.extend({

  template: JST['users/current_user_options'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

})
