class LoginController < ApplicationController
  layout false
  def login
    if logged_in?
      redirect_to top_path
    end
  end
end
