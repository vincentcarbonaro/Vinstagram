Vinstagram.Views.UserShow = Backbone.View.extend({

  template: JST['user_show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  events: {
    'click .open_upload button' : 'uploadPostPage'
  },

  render: function () {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);

    this.model.posts().each( function (post) {
      var view = new Vinstagram.Views.UserShowItem({
        model: post
      });
      this.$el.find('.user_posts').append(view.render().$el)
    }.bind(this))

    this.$el.append();

    return this;
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
