$(function () {

  $('.guest-login-button').click(function (event) {
    $('.sign-first input').val('Guest')
    $('.sign-nth input').val('superpassword')
    $('.sign-bottom input').trigger("click");
  });

});
