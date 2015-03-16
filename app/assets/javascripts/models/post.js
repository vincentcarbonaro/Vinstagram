Vinstagram.Models.Post = Backbone.Model.extend({

  urlRoot: 'api/posts',

  author: function () {
    if (!this._author) {
      this._author = new Vinstagram.Models.User([], { user: this })
    }
    return this._author;
  },

  comments: function () {
    if (!this._comments) {
      this._comments = new Vinstagram.Collections.Comments([], { post: this })
    }
    return this._comments;
  },

  parse: function (response) {

    if (response.author) {
      this.author().set(response.author, { parse: true });
      delete response.author;
    }

    if (response.comments) {
      this.comments().set(response.comments, {parse: true });
      delete response.comments
    }

    return response
  },

});
