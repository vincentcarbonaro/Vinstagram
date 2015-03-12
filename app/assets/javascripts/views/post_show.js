Vinstagram.Views.PostShow = Backbone.View.extend({

  template: JST['post_show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      post: this.model
    });
    this.$el.html(content);
    return this;
  },
  
});
