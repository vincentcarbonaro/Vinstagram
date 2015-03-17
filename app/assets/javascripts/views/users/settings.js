Vinstagram.Views.Settings = Backbone.View.extend({

  tagName: 'form',

  template: JST['users/settings'],

    events: {
      "submit": "submit",
      "change #input-picture-file": "changePicture"
    },

  render: function () {
    var content = this.template({

    });
    this.$el.html(content)
    return this;
  },

  submit: function (event) {
    event.preventDefault();
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




//
//   changePicture: function (event) {
//     var file = event.currentTarget.files[0];
//     var fileReader = new FileReader();
//     var that = this;
//     fileReader.onloadend = function () {
//       that.model.set("picture", fileReader.result);
//       that.previewPic(fileReader.result);
//     };
//     fileReader.readAsDataURL(file);
//   },
//

//
// })
