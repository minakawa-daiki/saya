class CsvManageController < ApplicationController
  before_action :authenticate

  def index
    @file_names = Dir.glob("user_data/#{current_user.id}/*").each do |name|
      name.gsub!("user_data/#{current_user.id}/", '')
    end.reverse!
  end

  def upload
    if File.size(params[:file].path) < 300_000 && File.extname(params[:file].path) == '.csv'
      CSV.read(params[:file].path, headers: true, quote_char: "\x00")
      if Dir.glob("user_data/#{current_user.id}/*").index { |file| file.match(/#{Date.today}/) }
        if params[:referrer] == 'top'
          redirect_to top_path, notice: 'ファイルアップロードは1日1つまでです。更新する場合はアップロードしたファイルを一旦削除してから試してみてください。'
        elsif params[:referrer] == 'manage'
          redirect_to csv_path, notice: 'ファイルアップロードは1日1つまでです。更新する場合はアップロードしたファイルを一旦削除してから試してみてください。'
        end
      else
        PlayData.upload(params[:file], current_user.id)
        if params[:referrer] == 'top'
          redirect_to top_path, notice: 'CSVを追加しました。'
        elsif params[:referrer] == 'manage'
          redirect_to csv_path, notice: 'CSVを追加しました。'
        end
      end
    else
      if params[:referrer] == 'top'
        redirect_to top_path, notice: 'CSVを追加できませんでした。'
      elsif params[:referrer] == 'manage'
        redirect_to csv_path, notice: 'CSVを追加できませんでした。'
      end
    end
  rescue
    if params[:referrer] == 'top'
      redirect_to top_path, notice: 'CSVを追加できませんでした。'
    elsif params[:referrer] == 'manage'
      redirect_to csv_path, notice: 'CSVを追加できませんでした。'
    end
  end

  def delete
    File.delete("user_data/#{current_user.id}/#{params[:file]}")
    redirect_to csv_path, notice: 'CSVを削除しました。'
  end
end
