window.addEventListener('turbolinks:load', function() {
  var sort_order = 'desc';
  //titleソート
  var t_header = document.getElementById('title-header');
  if(t_header){
    t_header.addEventListener('click', function () {
      document.querySelector('.sort-icon').style.display = 'none';
      t_header.querySelector('.sort-icon').style.display = 'block';
      var container = document.querySelector('#record-container');
      [].slice.call(container.querySelectorAll('.record-content')).map(function(v){
        var title = v.querySelector('.title').innerHTML;
        return { dom: v, title: title };
      })
          .sort(function(a,b){
            var at = a.title.toString().toLowerCase();
            var bt = b.title.toString().toLowerCase();
            if(at < bt) { return sort_order === 'asc' ? 1 : -1; }
            else if(at > bt) { return sort_order === 'asc' ? -1 : 1; }
            return 0;
          })
          .forEach(function(v){ container.appendChild(v.dom); });
      if(sort_order === 'desc'){
        sort_order = 'asc';
        sortIconChange(t_header, 'asc');
      }else{
        sort_order = 'desc';
        sortIconChange(t_header, 'desc');
      }
    });
  }
});

