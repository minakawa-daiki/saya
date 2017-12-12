module ApplicationHelper
  def version_num(value)
    if value == '1st&substream'
      '1'
    elsif value == '2nd style'
      '2'
    elsif value == '3rd style'
      '3'
    elsif value == '4th style'
      '4'
    elsif value == '5th style'
      '5'
    elsif value == '6th style'
      '6'
    elsif value == '7th style'
      '7'
    elsif value == '8th style'
      '8'
    elsif value == '9th style'
      '9'
    elsif value == '10th style'
      '10'
    elsif value == 'IIDX RED'
      '11'
    elsif value == 'HAPPY SKY'
      '12'
    elsif value == 'DistorteD'
      '13'
    elsif value == 'GOLD'
      '14'
    elsif value == 'DJ TROOPERS'
      '15'
    elsif value == 'EMPRESS'
      '16'
    elsif value == 'SIRIUS'
      '17'
    elsif value == 'Resort Anthem'
      '18'
    elsif value == 'Lincle'
      '19'
    elsif value == 'tricoro'
      '20'
    elsif value == 'SPADA'
      '21'
    elsif value == 'PENDUAL'
      '22'
    elsif value == 'copula'
      '23'
    elsif value == 'SINOBUZ'
      '24'
    end
  end


  def create_clear_type(value)
    return "<span class='c-ac'>#{remove_clear(value)}</span>" if value == 'ASSIST CLEAR'
    return "<span class='c-ec'>#{remove_clear(value)}</span>" if value == 'EASY CLEAR'
    return "<span class='c-nc'>#{remove_clear(value)}</span>" if value == 'CLEAR'
    return "<span class='c-hc'>#{remove_clear(value)}</span>" if value == 'HARD CLEAR'
    return "<span class='c-ehc'>#{remove_clear(value)}</span>" if value == 'EX HARD CLEAR'
    "<span>#{remove_clear(value)}</span>"
  end

  private

  def remove_clear(value)
    return value if value == 'CLEAR'
    value.gsub('CLEAR','')
  end
end

