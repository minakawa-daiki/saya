window.addEventListener('turbolinks:load', function() {
  var sort_order = 'desc';
  var sort_level = 'a';
  //scoreソート
  var s_header = document.getElementById('score-header');
  if(s_header){
    s_header.addEventListener('click', function () {
      headerClicked(s_header, sort_order, function(v){
        var value =  v.querySelector('.a-score').innerHTML;
        if(sort_level === 'h'){
          value = v.querySelector('.h-score').innerHTML;
        }else if(sort_level === 'n'){
          value = v.querySelector('.n-score').innerHTML;
        }
        var title = v.querySelector('.title').innerHTML;
        return { dom: v, value: value, title: title };
      }, function(a,b){
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
  document.querySelectorAll('[name=score_sort_level]').forEach(function (t) {
    t.addEventListener('change', function (e) {
      sort_level = e.target.value
    });
  });
});
