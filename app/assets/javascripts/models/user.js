Vinstagram.Models.User = Backbone.Model.extend({

  urlRoot: 'api/users',

  posts: function () {
    if (!this._posts) {
      this._posts = new Vinstagram.Collections.Posts([], { user: this })
    }
    return this._posts;
  },

  parse: function (response) {
    if (response.posts) {
      this.posts().set(response.posts, { parse: true });
      delete response.posts;
    }
    return response
  },

})
