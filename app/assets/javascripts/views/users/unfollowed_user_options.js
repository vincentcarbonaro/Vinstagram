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
    var follow = new Vinstagram.Models.Follow({
      followee_id: this.model.id
    });
    follow.save({},{
      success: function () {
        this.model.fetch();
      }.bind(this)
    });
  }

})
