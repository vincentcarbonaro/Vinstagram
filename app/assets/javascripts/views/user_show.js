Vinstagram.Views.UserShow = Backbone.View.extend({

  template: JST['user_show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  events: {
    'click button' : 'uploadPhotoPage'
  },

  render: function () {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);
    return this;
  },

  uploadPhotoPage: function (event) {
    this.$el.remove();
    Backbone.history.navigate('postForm', {trigger: true})
  }

})
