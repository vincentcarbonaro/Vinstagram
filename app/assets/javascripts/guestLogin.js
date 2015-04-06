$(function () {

  $('.guest-login-button').click(function (event) {
    $('.sign-first input').val('guest')
    $('.sign-nth input').val('superpassword')
    $('.sign-bottom input').trigger("click");
  });

});
