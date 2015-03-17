Vinstagram.Views.UserShow = Backbone.View.extend({

  template: JST['users/user_show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  uploadPostPage: function (event) {
    this.$el.find('.upload').html();
    this.$el.find('.open_upload').remove();
    var post = new Vinstagram.Models.Post();
    var view = new Vinstagram.Views.PostForm({
      model: post
    });
    this.$el.find('.upload_form').html(view.render().$el);
  },

  render: function () {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);

    //if user is following or is current user, display all posts
    if (this.model.get('is_following') || this.model.get('is_current_user')) {
      this.displayPosts();
    } else {
      this.unfollowedUserOptions();
    }

    return this;
  },

  currentUserOptionsUserShow: function () {
    var view = new Vinstagram.Views.currentUserOptionsUserShow({
      model: this.model
    });
    this.$el.find('.user-options').append(view.render().$el);
  },

  displayPosts: function () {

    if (!this.model.get('is_current_user')) {
      var view = new Vinstagram.Views.UnfollowButton({
        model: this.model
      });
      this.$el.find('.user-options').append(view.render().$el);
    }

    this.model.posts().each( function (post) {
      var view = new Vinstagram.Views.UserShowItem({
        model: post
      });
      this.$el.find('.user-posts').append(view.render().$el)
    }.bind(this))

  },

  unfollowedUserOptions: function () {
    var view = new Vinstagram.Views.UnfollowedUserOptions({
      model: this.model
    });
    this.$el.find('.user-posts').append(view.render().$el)
  }

})
