window.addEventListener('turbolinks:load', function() {
  var v_header = document.getElementById('version-header');
  if(v_header){
    v_header.addEventListener('click', function () {
      var container = document.querySelector('#record-container');
      [].slice.call(container.querySelectorAll('.record-content')).map(function(v){
        var value = v.dataset.versionNum;
        return { dom: v, value: value };
      })
          .sort(function(a,b){ return  b.value - a.value; })
          .forEach(function(v){ container.appendChild(v.dom); });
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
            }
          }
        } else {
          for(var m = 0; m < el.length; m++){
            if(el[m].dataset.version === e.target.value){
              el[m].style.display = 'none';
            }
          }
        }
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
    });
  }
});

function triggerEvent(element, event) {
  if (document.createEvent) {
    // IE以外
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent(event, true, true ); // event type, bubbling, cancelable
    return element.dispatchEvent(evt);
  } else {
    // IE
    var evt = document.createEventObject();
    return element.fireEvent("on"+event, evt)
  }
}

