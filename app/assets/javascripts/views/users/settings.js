Vinstagram.Views.Settings = Backbone.View.extend({

  tagName: 'form',

  className: 'settings-backdrop',

  template: JST['users/settings'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  events: {
    "submit": "submit",
    "change #input-picture-file": "changePicture"
  },

  render: function () {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content)
    return this;
  },

  submit: function (event) {
    event.preventDefault();

    this.$el.find('.save-settings').val("Saving...");
    this.$el.find('.save-settings').prop('disabled', true);

    var formData = this.$el.serializeJSON();
    var that = this;

    this.model.save(formData, {
      success: function () {
        that = that;
        that.model.fetch();
        Backbone.history.navigate("", {trigger: true});
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

})
