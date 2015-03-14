Vinstagram.Views.UnfollowButton = Backbone.View.extend({

  template: JST['users/unfollow_button'],

  events: {
    'click .unfollow_user': 'unfollowUser'
  },

  render: function () {
    var view = this.template();
    this.$el.html(view)
    return this;
  },

  unfollowUser: function () {

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
