Vinstagram.Views.Feed = Backbone.View.extend({

  tagName: "li",

  template: JST['feed'],

  render: function () {
    var content = this.template({

    });
    this.$el.html(content);
    return this;
  }

})
