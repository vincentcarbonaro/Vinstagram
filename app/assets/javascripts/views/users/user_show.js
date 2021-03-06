Vinstagram.Views.UserShow = Backbone.View.extend({

  template: JST['users/user_show'],

  tagName: "section group",

  id: "user-show",

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

        this.$el.find('.bottom ul').append(view.render().$el)
      }.bind(this))
    }

    //if user is NOT current user, display follow/unfollow button
    if (!this.model.get('is_current_user') && this.model.get('is_current_user') != undefined) {
      var view = new Vinstagram.Views.FollowButton({
        model: this.model
      });
      this.$el.find('#follow-button').append(view.render().$el);
    } else {
      this.$el.find('#follow-button').toggle(false);
    }

    if(this.model.attributes.bio == null) {
      this.$el.find('.bio').toggle(false);
    }

    return this;
  },

})
