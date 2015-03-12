Vinstagram.Views.PostForm = Backbone.View.extend({

    template: JST['post_form'],

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
          console.log('successful save!');
          Backbone.history.navigate('', {trigger: true});
        },
        error: function () {
          console.log('failed save');
        }
      });
    }

});
