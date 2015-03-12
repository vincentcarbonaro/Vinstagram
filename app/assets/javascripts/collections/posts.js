Vinstagram.Collections.Posts = Backbone.Collection.extend({

  url: 'api/posts',

  model: Vinstagram.Models.Post,

  comparator: function (post) {
    return -Date.parse(post.get('created_at'));
  },

  getOrFetch: function (id) {

    var that = this;
    var posts = this;
    var post = this.get(id);

    if (!post) {
      post = new Vinstagram.Models.Post({id:id});
      post.fetch({
        success: function () {
          that.add(post);
        }
      });
    } else {
      post.fetch();
    }
    return post;
  }

});
