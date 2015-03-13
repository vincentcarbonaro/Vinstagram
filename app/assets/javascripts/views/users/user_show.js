Vinstagram.Views.UserShow = Backbone.View.extend({

  template: JST['users/user_show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  events: {
    'click .open_upload' : 'uploadPostPage'
  },

  render: function () {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);

    // if user is the current user, display post create and profile pic upload
    if (this.model.get('is_current_user')) { this.currentUserOptionsUserShow() }

    //if user is following or is current user, display all posts
    if (this.model.get('is_following') || this.model.get('is_current_user')) {
      this.displayPosts();
    } else {
      this.unfollowedUserOptions();
    }

    return this;
  },

  currentUserOptionsUserShow: function () {
    var view = new Vinstagram.Views.currentUserOptionsUserShow();
    this.$el.find('.user_options').append(view.render().$el);
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

  displayPosts: function () {
    this.model.posts().each( function (post) {
      var view = new Vinstagram.Views.UserShowItem({
        model: post
      });
      this.$el.find('.user_posts').append(view.render().$el)
    }.bind(this))

  },

  unfollowedUserOptions: function () {
    var view = new Vinstagram.Views.UnfollowedUserOptions();
    this.$el.find('.user_posts').append(view.render().$el)
  }

})
