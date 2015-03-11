window.Vinstagram = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Vinstagram.Routers.Router({ $rootEl: $('#main')})
    Backbone.history.start()
  }
};

$(document).ready(function(){
  Vinstagram.initialize();
});
