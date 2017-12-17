window.addEventListener('turbolinks:load', function() {
  var sort_order = 'desc';
  var sort_level = 'a';
  //dj-level typeソート
  var m_header = document.getElementById('dj-header');
  if(m_header){
    m_header.addEventListener('click', function () {
      headerClicked(m_header, sort_order, function(v){
        var value =  v.querySelector('.a-dj').innerHTML;
        if(sort_level === 'h'){
          value = v.querySelector('.h-dj').innerHTML;
        }else if(sort_level === 'n'){
          value = v.querySelector('.n-dj').innerHTML;
        }
        var title = v.querySelector('.title').innerHTML;
        return { dom: v, value: value, title: title };
      }, function(a,b){
        if(a.value === '---'){ return 1 }
        if(b.value === '---'){ return -1 }
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
  document.querySelectorAll('[name=dj_sort_level]').forEach(function (t) {
    t.addEventListener('change', function (e) {
      sort_level = e.target.value
    });
  });
});

var clearType = {
  "F": 0,
  "E": 1,
  "D": 2,
  "C": 3,
  "B": 4,
  "A": 5,
  "AA": 6,
  "AAA": 7
};
