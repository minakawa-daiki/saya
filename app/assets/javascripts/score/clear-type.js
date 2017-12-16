window.addEventListener('turbolinks:load', function() {
  var sort_order = 'desc';
  var sort_level = 'a';
  //clear typeソート
  var m_header = document.getElementById('clear-header');
  if(m_header){
    m_header.addEventListener('click', function () {
      headerClicked(m_header, sort_order, function(v){
        var value =  v.querySelector('.a-clear').getElementsByTagName('span')[0].textContent;
        if(sort_level === 'h'){
          value = v.querySelector('.h-clear').getElementsByTagName('span')[0].textContent;
        }else if(sort_level === 'n'){
          value = v.querySelector('.n-clear').getElementsByTagName('span')[0].textContent;
        }
        var title = v.querySelector('.title').innerHTML;
        return { dom: v, value: value, title: title };
      }, function(a,b){
        if(a.value === 'NO PLAY'){ return 1 }
        if(b.value === 'NO PLAY'){ return -1 }
        if(b.value === a.value){
          var at = a.title.toString().toLowerCase();
          var bt = b.title.toString().toLowerCase();
          if(at < bt) { return - 1; }
          else if(at > bt) { return 1; }
          return 0;
        }
        if(sort_order === 'asc') { return clearType[b.value] - clearType[a.value]; }
        return  clearType[a.value] - clearType[b.value];
      });
      if(sort_order === 'desc'){ sort_order = 'asc'; } else { sort_order = 'desc'; }
    });
  }
  document.querySelectorAll('[name=clear_sort_level]').forEach(function (t) {
    t.addEventListener('change', function (e) {
      sort_level = e.target.value
    });
  });
});

var clearType = {
  "FAILED": 0,
  "ASSIST": 1,
  "EASY": 2,
  "CLEAR": 3,
  "HARD": 4,
  "EX HARD": 5
};
