class HomeController < ApplicationController
  before_action :authenticate
  def index
    data1 = PlayData.find_by_user(1, 3)
    data2 = PlayData.find_by_user(1, 0)
    @new_record = PlayData.find_by_update_score(data1, data2)
  end

  def show
    @data1 = PlayData.find_by_user(1, 0)
    @data2 = PlayData.find_by_user(2, 1)
    PlayData.find_by_update_score(@data1, @data2)
  end

end
