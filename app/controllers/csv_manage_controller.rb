class CsvManageController < ApplicationController
  before_action :authenticate

  def upload

    unless File.size(params[:file].path) > 300000
      PlayData.upload(params[:file], current_user.id)
      if params[:referrer] == 'top'
        redirect_to top_path, notice: 'CSVを追加しました'
      end
    end

  end

end
