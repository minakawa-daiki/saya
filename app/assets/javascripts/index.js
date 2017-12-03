window.addEventListener('turbolinks:load', function() {
  var f_btn = document.getElementsByClassName('file_select_btn')[0];
  if(f_btn){
    document.getElementsByClassName('file_select_btn')[0].addEventListener('click', function () {
      document.getElementsByClassName('file_select')[0].click();
      return false;
    });
  }
  var file_select = document.getElementsByClassName('file_select')[0];
  if(file_select){
    file_select.addEventListener('change', function () {
      if(!(file_select.value)) return;
      var file = file_select.files[0];
      if(file.size > 300000){
        alert('ファイルサイズが許可された制限を超過しています');
        return
      }
      document.getElementsByClassName('icon')[0].classList.add('select');
      document.getElementsByClassName('icon')[0].innerHTML = '選択中';
      document.getElementsByClassName('filename')[0].innerHTML =  'ファイル名：' + file.name;
      document.getElementsByClassName('submit')[0].style.display = 'inline';
    });
  }
});

