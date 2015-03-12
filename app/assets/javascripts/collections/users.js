Vinstagram.Collections.Users = Backbone.Collection.extend({

  model: Vinstagram.Models.User,

  url: 'api/users',

  getOrFetch: function (id) {
    var that = this;
    var users = this;
    var user = this.get(id)

    if (!user) {
      user = new Vinstagram.Models.User({id:id});
      user.fetch({
        success: function () {
          that.add(user);
        }
      })
    } else {
      user.fetch();
    }
    return user;
  }

})
