window.Vinstagram = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    Vinstagram.posts = new Vinstagram.Collections.Posts();
    Vinstagram.users = new Vinstagram.Collections.Users();

    new Vinstagram.Routers.Router({ $rootEl: $('#main')})
    Backbone.history.start()
  }
};
