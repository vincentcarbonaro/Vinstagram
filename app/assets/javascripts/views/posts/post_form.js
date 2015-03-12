Vinstagram.Views.PostForm = Backbone.View.extend({

    template: JST['posts/post_form'],

    events: {
      'submit form': 'submitForm'
    },

    render: function () {
      var content = this.template({

      });
      this.$el.html(content);
      return this;
    },

    submitForm: function (event) {
      event.preventDefault();

      var formData = $(event.currentTarget).serializeJSON();
      var that = this;

      this.model.set(formData);
      this.model.save({}, {
        success: function () {
          Backbone.history.navigate('', {trigger: true});
        },
        error: function () {
          alert("lol no. you need text bruh");
        }
      });
    }

});
