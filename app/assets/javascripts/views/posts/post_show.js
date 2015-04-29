Vinstagram.Views.PostShow = Backbone.CompositeView.extend({

  template: JST['posts/post_show'],

  tagName: 'section',

  className: 'indy-post-show-backdrop',

  events: {
    'click .delete-post': 'deletePost'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.checkUser)
  },

  render: function () {
    var content = this.template();
    this.$el.html(content)

    var feedItem = new Vinstagram.Views.FeedItem({
      model: this.model
    })
    this.addSubview(".post-show-item", feedItem)

    return this;
  },

  checkUser: function () {
    if (this.model.attributes.is_current_user){
      this.$el.find('.delete-post').toggle(true);
    }
  },

  deletePost: function () {

    //THIS IS TEMPORARY CODE TO KEEP PEOPLE FROM DELETEING VINS AND GUESTS
    //PHOTOS FOR PRESERVING GUEST ACCOUNT
    if (this.model.id < 24) {
      alert("You can't delete one of our stock photos but feel free to upload and delete new photos!")
    } else {
      if (this.model.attributes.is_current_user) {
        this.$el.find('.delete-post').text(" ..deleting.. ")
        this.model.destroy({
          success: function () {
            Vinstagram.posts.reset();
            Backbone.history.navigate('', {trigger: true});
          }
        })
      }
    }
  }

});
