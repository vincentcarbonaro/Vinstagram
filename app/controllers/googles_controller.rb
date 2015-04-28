class GooglesController < ApplicationController

  def create
    auth = request.env["omniauth.auth"]
    user = User.find_by_uid(auth["uid"]) || User.create_with_omniauth(auth)
    # user = User.find_by_provider_and_uid(auth["provider"], auth["uid"]) || User.create_with_omniauth(auth)
    sign_in(user)
    redirect_to root_url
  end

  def destroy
    log_out!(current_user)
    redirect_to new_session_url
  end

end
