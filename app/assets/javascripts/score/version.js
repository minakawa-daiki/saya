window.addEventListener('turbolinks:load', function() {
  var sort_order = 'asc';
  //versionソート
  var v_header = document.getElementById('version-header');
  if(v_header){
    v_header.addEventListener('click', function () {
      headerClicked(v_header, sort_order, function(v){
        var value = v.dataset.versionNum;
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

  var v = document.getElementById('v');
  if(v){
    var el = document.getElementsByClassName('record-content');
    var vs = [];
    for(var i = 1; i < 25; i++){
      vs.push(document.getElementById('v' + i));
    }

    for (var k = 0; k < vs.length; k++) {
      vs[k].addEventListener('change', function (e) {
        if(e.target.checked){
          for(var l = 0; l < el.length; l++){
            if(el[l].dataset.version === e.target.value){
              el[l].style.display = 'flex';
              el[l].dataset.enable = 'true';
            }
          }
        } else {
          for(var m = 0; m < el.length; m++){
            if(el[m].dataset.version === e.target.value){
              el[m].style.display = 'none';
              el[m].dataset.enable = 'false';
            }
          }
        }
        updatePageWithCheck();
      });
    }
    v.addEventListener('change', function () {
      if (!v.checked) {
        for (var i = 0; i < vs.length; i++) {
          vs[i].checked = false;
          triggerEvent(vs[i], 'change');
        }
      } else {
        for (var j = 0; j < vs.length; j++) {
          vs[j].checked = true;
          triggerEvent(vs[j], 'change');
        }
      }
      updatePageWithCheck();
    });
  }
});
