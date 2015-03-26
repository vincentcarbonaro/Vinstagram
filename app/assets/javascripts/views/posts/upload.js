Vinstagram.Views.Upload = Backbone.View.extend({

    template: JST['posts/upload'],

    events: {
      'submit form': 'submitForm',
      "change #input-post-file": "changePicture",
      "click #crop-picture": "updatePicture",
      'click .add-a-photo': 'triggerFileSelect',
    },

    triggerFileSelect: function () {
      event.preventDefault();
      this.$("#input-post-file").trigger("click");
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
        that.$el.find('.post-pic-box').toggle(true);
        that.$el.find('.caption-and-submit').toggle(true);
      };
      fileReader.readAsDataURL(file);
    },

    previewPic: function (src) {

      this.$("#picture-preview").attr("src", src);
      $('.jcrop-holder img').attr('src', src);

      var that = this;

      $('#picture-preview').Jcrop({
        boxWidth: 510,
        boxHeight: 510,
        allowSelect: true,
        allowMove: true,
        allowResize: true,
        onSelect: that.updateCrop,
        onChange: that.updateCrop,
        bgOpacity: .3,
        aspectRatio: 1,
        bgColor: 'black',
        setSelect: [0, 0, 510, 510],
        addClass: 'jcrop-dark'
      });

    },

    updateCrop: function (coords) {
      $('#crop_x').val(Math.round(coords.x));
      $('#crop_y').val(Math.round(coords.y));
      $('#crop_w').val(Math.round(coords.w));
      $('#crop_h').val(Math.round(coords.h));
    },

});
