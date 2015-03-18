Vinstagram.Views.UserShowItem = Backbone.View.extend({

  tagName: 'li',

  className: 'user-show-item',

  template: JST['users/user_show_item'],

  render: function () {
    var content = this.template({
      post: this.model
    });
    this.$el.html(content);
    return this;
  }

})
