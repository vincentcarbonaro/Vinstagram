Vinstagram.Views.BioForm = Backbone.View.extend({

  template: JST['users/bio_form'],

  render: function () {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);
    return this;
  }

})
