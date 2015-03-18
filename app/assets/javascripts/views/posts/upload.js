Vinstagram.Views.Upload = Backbone.View.extend({

    template: JST['posts/upload'],

    events: {
      'submit form': 'submitForm',
      "change #input-picture-file": "changePicture"
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
          that = that;
          that.model.fetch();
          Backbone.history.navigate('', {trigger: true});
        },
        error: function () {
          alert('You Must Select A Picture First!')
        }
      });
    },

    changePicture: function (event) {
      var file = event.currentTarget.files[0];
      var fileReader = new FileReader();
      var that = this;
      fileReader.onloadend = function () {
        that.model.set("picture", fileReader.result);
        that.previewPic(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    },

    previewPic: function (src) {
      this.$("#picture-preview").attr("src", src);
    }

});
