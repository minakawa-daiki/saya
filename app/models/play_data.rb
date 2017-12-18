class PlayData
  def self.upload(file, user_id)
    FileUtils.mkdir_p("user_data/#{user_id}")
    open("user_data/#{user_id}/#{Date.today}_#{file.original_filename}", 'wb') do |output|
      open(file.path) do |data|
        output.write(data.read)
      end
    end
  end

  def self.find_by_user(user_id, csv_id)
    data = []
    csv_list = Dir.glob("user_data/#{user_id}/*").reverse
    begin
      CSV.foreach(csv_list[csv_id], headers: true, quote_char: "\x00") do |row|
        data.append(row.to_hash)
      end
      data
    rescue
      data
    end
  end

  def self.find_csv_list(user_id)
    hash = {}
    Dir.glob("user_data/#{user_id}/*").reverse.each_with_index do |v, k|
      hash[v.sub!("user_data/#{user_id}/", '')] = k
    end
    hash
  end

  def self.find_by_update_score(data1, data2)
    normal_update_record = {}
    hyper_update_record = {}
    another_update_record = {}
    data1.each do |record1|
      data2.each do |record2|
        next unless record1['タイトル'] == record2['タイトル']
        if record1['NORMAL EXスコア'].to_i < record2['NORMAL EXスコア'].to_i
          normal_update_record[record1['タイトル']] = {
            diff: record2['NORMAL EXスコア'].to_i - record1['NORMAL EXスコア'].to_i,
            date: record2['最終プレー日時'],
            score: record2['NORMAL EXスコア'],
            level1: record1['NORMAL DJ LEVEL'],
            level2: record2['NORMAL DJ LEVEL'],
            miss1: record1['NORMAL ミスカウント'],
            miss2: record2['NORMAL ミスカウント'],
            type1: record1['NORMAL クリアタイプ'],
            type2: record2['NORMAL クリアタイプ']
          }
        end
        if record1['HYPER EXスコア'].to_i < record2['HYPER EXスコア'].to_i
          hyper_update_record[record1['タイトル']] = {
            diff: record2['HYPER EXスコア'].to_i - record1['HYPER EXスコア'].to_i,
            date: record2['最終プレー日時'],
            score: record2['HYPER EXスコア'],
            level1: record1['HYPER DJ LEVEL'],
            level2: record2['HYPER DJ LEVEL'],
            miss1: record1['HYPER ミスカウント'],
            miss2: record2['HYPER ミスカウント'],
            type1: record1['HYPER クリアタイプ'],
            type2: record2['HYPER クリアタイプ']
          }
        end
        next unless record1['ANOTHER EXスコア'].to_i < record2['ANOTHER EXスコア'].to_i
        another_update_record[record1['タイトル']] = {
          diff: record2['ANOTHER EXスコア'].to_i - record1['ANOTHER EXスコア'].to_i,
          date: record2['最終プレー日時'],
          score: record2['ANOTHER EXスコア'],
          level1: record1['ANOTHER DJ LEVEL'],
          level2: record2['ANOTHER DJ LEVEL'],
          miss1: record1['ANOTHER ミスカウント'],
          miss2: record2['ANOTHER ミスカウント'],
          type1: record1['ANOTHER クリアタイプ'],
          type2: record2['ANOTHER クリアタイプ']
        }
      end
    end
    [normal_update_record, hyper_update_record, another_update_record]
  end
end
