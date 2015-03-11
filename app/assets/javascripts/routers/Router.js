Vinstagram.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'feed',
    'users/:id': 'userShow'
  },

  feed: function () {
    var users = Vinstagram.users;
    var view = new Vinstagram.Views.Feed({

    });
    this._swapView(view);
  },

  user_show: function () {
    this._swapView("USER SHOW")
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

})
