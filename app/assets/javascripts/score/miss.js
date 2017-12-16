window.addEventListener('turbolinks:load', function() {
  var sort_order = 'desc';
  var sort_level = 'a';
  //missソート
  var m_header = document.getElementById('miss-header');
  if(m_header){
    m_header.addEventListener('click', function () {
      headerClicked(m_header, sort_order, function(v){
        var value =  v.querySelector('.a-miss').innerHTML;
        if(sort_level === 'h'){
          value = v.querySelector('.h-miss').innerHTML;
        }else if(sort_level === 'n'){
          value = v.querySelector('.n-miss').innerHTML;
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
        if(sort_order === 'asc') { return b.value - a.value; }
        return  a.value - b.value;
      });
      if(sort_order === 'desc'){ sort_order = 'asc'; } else { sort_order = 'desc'; }
    });
  }
  document.querySelectorAll('[name=miss_sort_level]').forEach(function (t) {
    t.addEventListener('change', function (e) {
      sort_level = e.target.value
    });
  });
});
