class HomeController < ApplicationController

  def index

  end

  def upload
    PlayData.upload(params[:file])
    #redirect_to root_path, notice: 'CSVを追加しました'
  end

  def show
    @data1 = PlayData.find_by_user(1)
    @data2 = PlayData.find_by_user(2)
    PlayData.find_by_update_score(@data1, @data2)
  end

end
