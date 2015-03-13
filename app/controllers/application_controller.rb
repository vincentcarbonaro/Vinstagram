class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception
  helper_method :current_user, :signed_in?, :is_current_user?, :is_following?

  def is_current_user?(user)
    user == current_user
  end

  def is_following?(user)
    
  end

  private
  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token
  end

  def sign_out
    current_user.try(:reset_session_token)
    session[:session_token] = nil
  end

  def require_signed_in
    redirect_to new_session_url unless signed_in?
  end

  def require_signed_out
    redirect_to root_url if signed_in?
  end

end
