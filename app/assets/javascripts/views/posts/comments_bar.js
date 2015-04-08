Vinstagram.Views.CommentsBar = Backbone.CompositeView.extend({

  template: JST['posts/comments_bar'],

  initialize: function () {
    this.listenTo(this.model.comments(), 'add', this.addComment)
    this.listenTo(this.model.comments(), 'remove', this.removeComment)

    var that = this;

    this.model.comments().forEach( function (comment) {
      var commentView = new Vinstagram.Views.Comment({
        model: comment
      });
      that.addSubview('.feed-item-text', commentView);
    })

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

  addComment: function (comment) {
    var commentView = new Vinstagram.Views.Comment({
      model: comment
    });
    this.addSubview('.feed-item-text', commentView);
  },

  removeComment: function (comment) {

    var subview = _.find(
      this.subviews(".feed-item-text"),
      function (subview) {
        return subview.model === comment;
      }
    );

   this.removeSubview(".feed-item-text", subview);
  }

});
