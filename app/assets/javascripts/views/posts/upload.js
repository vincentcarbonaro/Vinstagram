Vinstagram.Views.Upload = Backbone.View.extend({

    template: JST['posts/upload'],

    events: {
      'submit form': 'submitForm',
      "change #input-picture-file": "changePicture"
    },

    render: function () {
      var content = this.template();
      this.$el.html(content);
      return this;
    },

    submitForm: function (event) {
      event.preventDefault();
      this.$el.find('.share-button').val("Posting...");
      this.$el.find('.share-button').prop('disabled', true);

      debugger

      var formData = $(event.currentTarget).serializeJSON();
      var that = this;

      this.model.set(formData);
      this.model.save({}, {
        success: function () {
          that = that;
          that.model.fetch();
          Backbone.history.navigate('', {trigger: true});
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
        that.$el.find('.post-pic-preview').toggle();
        that.$el.find('.caption-and-submit').toggle();
      };
      fileReader.readAsDataURL(file);
    },

    previewPic: function (src) {
      this.$("#picture-preview").attr("src", src);
    }

});
