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
    var follow = new Vinstagram.Models.Follow({
      followee_id: this.model.id
    })


    follow.fetch({
      success: function () {

      }.bind(this)
    });
    this.model.fetch();

    console.log('cant delete yet');
  }

})
