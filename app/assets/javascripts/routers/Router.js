Vinstagram.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.first_time = true;
  },

  routes: {
    '': 'feed',
    'user/:id': 'userShow',
    'post/:id': 'postShow',
    'upload': 'upload',
    'search': "search",
    'settings': "settings"
  },

  feed: function () {
    Vinstagram.posts.fetch()
    var view = new Vinstagram.Views.Feed({
      collection: Vinstagram.posts,
      model: this.first_time
    });
    this._swapView(view);
    this.first_time = false;
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

  search: function () {
    var view = new Vinstagram.Views.Search();
    this._swapView(view);
  },

  upload: function () {
    var post = new Vinstagram.Models.Post();
    var view = new Vinstagram.Views.Upload({
      model: post
    });
    this._swapView(view);
  },

  settings: function () {
    var user = new Vinstagram.Models.User();
    user.fetch();
    var view = new Vinstagram.Views.Settings({
      model: user
    });
    this._swapView(view)
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

})
