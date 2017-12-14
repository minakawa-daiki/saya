window.addEventListener('turbolinks:load', function() {
  var sort_order = 'desc';
  //play numソート
  var n_header = document.getElementById('num-header');
  if(n_header){
    n_header.addEventListener('click',
        function () {
          headerClicked(n_header, sort_order, function(v){
            var value = Number(v.querySelector('.num').innerHTML);
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
});