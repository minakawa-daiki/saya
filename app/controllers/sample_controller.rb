class SampleController < ApplicationController

  layout 'sample_layout'

  def index
    @data = if params[:csv]
              PlayData.find_by_user(1, params[:csv].to_i)
            else
              PlayData.find_by_user(1, 0)
            end
    @csvs = PlayData.find_csv_list(1)
    setting_params
  end

  def compare
    if params[:csv1] && params[:csv2]
      data1 = PlayData.find_by_user(1, params[:csv2].to_i)
      data2 = PlayData.find_by_user(1, params[:csv1].to_i)
    else
      data1 = PlayData.find_by_user(1, 1)
      data2 = PlayData.find_by_user(1, 0)
    end
    @new_record = PlayData.find_by_update_score(data1, data2)
    @csvs = PlayData.find_csv_list(1)
  end

  private

  def setting_params
    params[:v] = true
    (1..24).each do |num|
      params['v' + num.to_s] = true
    end
  end

end
