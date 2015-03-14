Vinstagram.Views.UnfollowedUserOptions = Backbone.View.extend({

  template: JST['users/unfollowed_user_options'],

  events: {
    'click .follow_user': 'followUser'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  followUser: function () {

    var that = this;

    $.ajax({
      url: "api/follows",
      type: "POST",
      data: {
        followee_id: this.model.id
      },
      success: function () {
        that.model.fetch();
      }
    });
  }

})
