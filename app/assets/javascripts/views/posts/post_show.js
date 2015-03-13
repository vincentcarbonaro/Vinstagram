Vinstagram.Views.PostShow = Backbone.View.extend({

  template: JST['posts/post_show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'click button': 'destroyPost'
  },

  render: function () {
    var content = this.template({
      post: this.model
    });
    this.$el.html(content);

    if (this.model.get('is_current_user')) { this.currentUserOptionsPostShow() }

    return this;
  },

  currentUserOptionsPostShow: function () {
    var view = new Vinstagram.Views.currentUserOptionsPostShow();
    this.$el.find('.user_options').append(view.render().$el);
  },

  destroyPost: function (event) {
    this.model.destroy();
    Backbone.history.navigate('', {trigger :true})
  }

});
