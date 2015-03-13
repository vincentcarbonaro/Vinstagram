Vinstagram.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'feed',
    'user/:id': 'userShow',
    'post/:id': 'postShow',
  },

  feed: function () {
    Vinstagram.posts.fetch()
    var view = new Vinstagram.Views.Feed({
      collection: Vinstagram.posts
    });
    this._swapView(view);
  },

  userShow: function (id) {
    var user = Vinstagram.users.getOrFetch(id);
    var view = new Vinstagram.Views.UserShow({
      model: user
    });
    this._swapView(view)
  },

  postShow: function (id) {
    var post = Vinstagram.posts.getOrFetch(id);
    var view = new Vinstagram.Views.PostShow({
      model: post,
      collection: Vinstagram.posts,
    });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

})