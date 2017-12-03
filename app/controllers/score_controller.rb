class ScoreController < ApplicationController
  before_action :authenticate
  def index
    #@data = PlayData.find_by_user(1).sort!{|a, b| a['タイトル'] <=> b['タイトル'] }
    #@data = PlayData.find_by_user(1).sort!{|a, b| b['ANOTHER EXスコア'].to_i <=> a['ANOTHER EXスコア'].to_i }
    # @data = PlayData.find_by_user(1).sort!{|a, b|
    #   (b['ANOTHER 難易度'].to_i <=> a['ANOTHER 難易度'].to_i).nonzero? ||
    #       a['タイトル'] <=> b['タイトル']
    # }
    #@data = filter_by_version(PlayData.find_by_user(1), 'SINOBUZ')
    @data = PlayData.find_by_user(1)
    setting_params
  end

  def search
    @data = PlayData.find_by_user(1)
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
