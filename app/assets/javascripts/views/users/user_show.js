Vinstagram.Views.UserShow = Backbone.View.extend({

  template: JST['users/user_show'],

  tagName: "section",

  className: "user-show-backdrop",

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  events: {
    // 'click .text-area-trigger': 'editBio',
  },

  saveBio: function (event) {
  },

  editBio: function (event) {
    if(this.model.get('is_current_user')) {
      var view = new Vinstagram.Views.BioForm({
        model: this.model
      });
      this.$el.find('.user-show-bio').html(view.render().$el)
    }
    this.$el.find('.bio-edit-text-area').select();
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
