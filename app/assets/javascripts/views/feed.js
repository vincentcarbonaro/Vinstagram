Vinstagram.Views.Feed = Backbone.View.extend({

  template: JST['feed'],

  initialize: function () {
    
  },

  render: function () {
    var content = this.template({});
    this.$el.html(content);
    return this;
  }

});
