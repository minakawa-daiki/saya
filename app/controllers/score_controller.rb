class ScoreController < ApplicationController
  before_action :authenticate
  def index
    p params[:csv].to_i
    if params[:csv]
      @data = PlayData.find_by_user(1, params[:csv].to_i)
    else
      @data = PlayData.find_by_user(1, 0)
    end
    @csvs = PlayData.find_csv_list(1)
    setting_params
  end

  def search
    @data = PlayData.find_by_user(1, 1)
    render 'index'
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
