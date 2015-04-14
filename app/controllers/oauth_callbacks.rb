class OauthCallbacksController < ApplicationController

  def facebook
    user = User.find_or_create_by_fb_auth_hash(request.env['omniauth.auth'])
    sign_in(user)

    flash[:success] = "Logged in with facebook!"
    redirect_to user
  end

end
