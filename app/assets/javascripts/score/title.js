window.addEventListener('turbolinks:load', function() {
  var sort_order = 'desc';
  //titleソート
  var t_header = document.getElementById('title-header');
  if(t_header){
    t_header.addEventListener('click',
        function () {
      headerClicked(t_header, sort_order, function(v){
        var title = v.querySelector('.title').innerHTML;
        return { dom: v, title: title };
      }, function(a,b){
        var at = a.title.toString().toLowerCase();
        var bt = b.title.toString().toLowerCase();
        if(at < bt) { return sort_order === 'asc' ? 1 : -1; }
        else if(at > bt) { return sort_order === 'asc' ? -1 : 1; }
        return 0;
      });
      if(sort_order === 'desc'){ sort_order = 'asc'; } else { sort_order = 'desc'; }
    });
  }
});

