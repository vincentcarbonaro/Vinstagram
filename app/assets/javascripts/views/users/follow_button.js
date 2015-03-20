Vinstagram.Views.FollowButton = Backbone.View.extend({

  template: JST['users/follow_button'],

  events: {
    'click button': 'followToggle'
  },

  render: function () {
    var view = this.template({
      user: this.model
    });
    this.$el.html(view)
    return this;
  },

  followToggle: function () {
    var that = this;

    $.ajax({
      url: "api/follows",
      type: "POST",
      data: {
        followee_id: this.model.id
      },
      success: function () {
        that.model.fetch();
      }
    });
  }

})
