Vinstagram.Views.UserShowItem = Backbone.View.extend({

  tagName: 'li',

  template: JST['user_show_item'],

  events: {
    'click button': 'destroyPost'
  },

  render: function () {
    var content = this.template({
      post: this.model
    });
    this.$el.html(content);
    return this;
  },

  destroyPost: function (event) {
    this.model.destroy();
    Backbone.history.navigate('', {trigger :true})
  }

})
