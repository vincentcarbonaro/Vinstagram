Vinstagram.Views.UnfollowedUserOptions = Backbone.View.extend({

  template: JST['users/unfollowed_user_options'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

})
