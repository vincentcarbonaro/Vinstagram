Vinstagram.Views.FollowButton = Backbone.View.extend({

  template: JST['users/follow_button'],

  events: {
    'click #follow-button': 'followToggle'
  },

  render: function () {
    var view = this.template({
      user: this.model
    });
    this.$el.html(view)
    return this;
  },

  followToggle: function (event) {
    event.preventDefault();

    if (this.$el.find('#follow-button').val() === "+  Follow") {
      this.$el.find('#follow-button').val("Following..");
    } else {
      this.$el.find('#follow-button').val("Unfollowing..")
    }

    this.$el.find('#follow-button').prop('disabled', true);

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
