class ScoreController < ApplicationController
  before_action :authenticate
  def index
    if params[:csv]
      @data = PlayData.find_by_user(current_user.id, params[:csv].to_i)
    else
      @data = PlayData.find_by_user(current_user.id, 0)
    end
    @csvs = PlayData.find_csv_list(1)
    setting_params
  end

  private

  def filter_by_version(data, versions)
    data.select do |record|
      record['﻿バージョン'] == versions
    end
  end

  def setting_params
    params[:v] = true
    (1..24).each {|num|
      params['v' + num.to_s] = true
    }
  end
end
