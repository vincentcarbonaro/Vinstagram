Vinstagram.Views.FeedItem = Backbone.CompositeView.extend({

  tagName: 'li',

  template: JST['posts/feed_item'],

  initialize: function () {
    this.listenTo(this.model, 'add', this.render);

    var likesBar = new Vinstagram.Views.LikesBar({
      model: this.model
    })
    this.addSubview('.like-bar', likesBar);

    var commentsBar = new Vinstagram.Views.CommentsBar({
      model: this.model
    })
    this.addSubview('.comment-list', commentsBar);

    var commentForm = new Vinstagram.Views.AddComment({
      model: this.model
    })
    this.addSubview('.add-comment-section', commentForm)

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
