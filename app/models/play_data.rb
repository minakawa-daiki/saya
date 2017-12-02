class PlayData
  def self.upload(file)
    open("user_data/#{file.original_filename}", 'wb') do |output|
      open(file.path) do |data|
        output.write(data.read)
      end
    end
  end

  def self.find_by_user(id)
    data = []
    if id == 1
      CSV.foreach("user_data/1244-0940_sp_score.csv", headers: true, quote_char: "\x00") do |row|
        data.append(row.to_hash)
      end
    else
      CSV.foreach("user_data/1244-0940_sp_score_2.csv", headers: true, quote_char: "\x00") do |row|
        data.append(row.to_hash)
      end
    end
    data
  end

  def self.find_by_update_score(data1, data2)
    data1.each do |record|
      record.each do |k, v|

        # data2.each do |record|
        #   p record[k]
        # end
      end
    end
  end
end