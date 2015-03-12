Vinstagram.Models.Post = Backbone.Model.extend({

  urlRoot: 'api/posts',

  author: function () {
    if (!this._author) {
      this._author = new Vinstagram.Models.User([], { user: this })
    }
    return this._author;
  },

  parse: function (response) {

    if (response.author) {
      this.author().set(response.author, { parse: true });
      delete response.author;
    }
    return response
  },

});
