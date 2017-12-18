class HomeController < ApplicationController
  before_action :authenticate
  def index
    data1 = PlayData.find_by_user(current_user.id, 3)
    data2 = PlayData.find_by_user(current_user.id, 0)
    @new_record = PlayData.find_by_update_score(data1, data2)
  end

end
