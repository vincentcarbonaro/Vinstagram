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

    if (this.model.get('is_current_user')) {
      var view = new Vinstagram.Views.CurrentUserOptions({});
      this.$el.find('.user_options').append(view.render().$el);
    }

    this.model.posts().each( function (post) {
      var view = new Vinstagram.Views.UserShowItem({
        model: post
      });
      this.$el.find('.user_posts').append(view.render().$el)
    }.bind(this))

    return this;
  },

  show_user_options: function () {

  },

  uploadPostPage: function (event) {
    this.$el.find('.upload').html();
    this.$el.find('.open_upload').remove();
    var post = new Vinstagram.Models.Post();
    var view = new Vinstagram.Views.PostForm({
      model: post
    });
    this.$el.find('.upload_form').html(view.render().$el);
  }

})
