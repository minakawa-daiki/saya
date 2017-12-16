window.addEventListener('turbolinks:load', function() {
  var es = document.getElementById('element-search');
  if(es){
    var el = document.querySelectorAll('.record-content');
    es.addEventListener('keyup', function (e){
      if(e.target.value.length > 0){
        el.forEach(function (t,index) {
          if(t.dataset.title.match(e.target.value)){
            el[index].style.display = 'flex';
            el[index].dataset.searched = 'true';
          }else{
            el[index].style.display = 'none';
            el[index].dataset.searched = 'false';
          }
        });
      } else {
        el.forEach(function (t,index) {
          if(el[index].dataset.searched === 'false'){
            el[index].dataset.searched = 'true';
          }
        });
      }
      updatePageWithCheck();
    });
  }
});
