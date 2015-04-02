Vinstagram.Views.CommentsBar = Backbone.CompositeView.extend({

  template: JST['posts/comments_bar'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    var content = this.template({
      post: this.model
    });
    this.$el.html(content);
    this.attachSubviews();
    if (this.model.comments().length != 0 || this.model.get('text')){
      this.$el.find('.toggled-section').toggle(true);
    }
    return this;
  },

});
