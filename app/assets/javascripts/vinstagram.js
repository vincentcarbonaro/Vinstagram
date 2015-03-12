window.Vinstagram = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    Vinstagram.posts = new Vinstagram.Collections.Posts();
    Vinstagram.feed = new Vinstagram.Collections.Feed();
    Vinstagram.users = new Vinstagram.Collections.Users();

    new Vinstagram.Routers.Router({ $rootEl: $('#main')})
    Backbone.history.start()
  }
};
