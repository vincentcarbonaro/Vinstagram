Vinstagram.Views.UserShow = Backbone.View.extend({

  template: JST['users/user_show'],

  tagName: "section",

  className: "user-show-backdrop",

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);

    //if user is following or is current user, display all posts
    if (this.model.get('is_following') || this.model.get('is_current_user')) {
      this.model.posts().each( function (post) {
        var view = new Vinstagram.Views.UserShowItem({
          model: post
        });
        this.$el.find('.user-show-bottom').append(view.render().$el)
      }.bind(this))
    }

    //if user is NOT current user, display follow/unfollow button
    if (!this.model.get('is_current_user')) {
      var view = new Vinstagram.Views.FollowButton({
        model: this.model
      });
      this.$el.find('.user-show-follow-button').append(view.render().$el);
    }

    return this;
  },

})
