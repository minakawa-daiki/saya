window.addEventListener('turbolinks:load', function() {

  var sort_order = 'desc';
  var sort_level = 'a';
  //versionソート
  var l_header = document.getElementById('level-header');
  if(l_header){
    l_header.addEventListener('click', function () {
      headerClicked(l_header, sort_order, function(v){
        var value = v.dataset.aLevel;
        if(sort_level === 'h'){
          value = v.dataset.hLevel;
        }else if(sort_level === 'n'){
          value = v.dataset.nLevel;
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

  var l = document.getElementById('l');
  if (l) {
    var el = document.getElementsByClassName('record-content');
    var ls = [];
    for (var i = 0; i < 13; i++) {
      ls.push(document.getElementById('l' + i));
    }

    for (var k = 0; k < ls.length; k++) {
      ls[k].addEventListener('change', function (e) {
        if (e.target.checked) {
          for (var l = 0; l < el.length; l++) {
            if (el[l].dataset.nLevel === e.target.value ||
                el[l].dataset.hLevel === e.target.value ||
                el[l].dataset.aLevel === e.target.value) {
              el[l].style.display = 'flex';
            }
          }
        } else {
          for (var m = 0; m < el.length; m++) {
            if (el[m].dataset.nLevel === e.target.value ||
                el[m].dataset.hLevel === e.target.value ||
                el[m].dataset.aLevel === e.target.value) {
              if (!ls[Number(el[m].dataset.nLevel)].checked &&
                  !ls[Number(el[m].dataset.hLevel)].checked &&
                  !ls[Number(el[m].dataset.aLevel)].checked ){
                el[m].style.display = 'none';
              }
            }
          }
        }
      });
    }
    l.addEventListener('change', function () {
      if (!l.checked) {
        for (var i = 0; i < ls.length; i++) {
          ls[i].checked = false;
          triggerEvent(ls[i], 'change');
        }
      } else {
        for (var j = 0; j < ls.length; j++) {
          ls[j].checked = true;
          triggerEvent(ls[j], 'change');
        }
      }
    });

    document.querySelectorAll('[name=sort_level]').forEach(function (t) {
      t.addEventListener('change', function (e) {
        sort_level = e.target.value
      });
    })
  }
});
