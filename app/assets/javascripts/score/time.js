window.addEventListener('turbolinks:load', function() {
  var sort_order = 'desc';
  //timeソート
  var t_header = document.getElementById('time-header');
  if(t_header){
    t_header.addEventListener('click',
        function () {
          headerClicked(t_header, sort_order, function(v){
            var value = v.querySelector('.time').innerHTML;
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
            if(sort_order === 'asc') { return (b.value < a.value ? -1 : 1); }
            return  (a.value < b.value ? -1 : 1);
          });
          if(sort_order === 'desc'){ sort_order = 'asc'; } else { sort_order = 'desc'; }
        });
  }
});

