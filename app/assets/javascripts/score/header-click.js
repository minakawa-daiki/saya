function headerClicked(element, sort_order, sortTargetCallback, sortCallback){
  document.querySelectorAll('.sort-icon').forEach(function (e) { e.style.display = 'none'; });
  element.querySelector('.sort-icon').style.display = 'block';
  var container = document.querySelector('#record-container');
  [].slice.call(container.querySelectorAll('.record-content')).map(function(v){
    return sortTargetCallback(v);
  }).sort(function(a,b){
    return sortCallback(a,b);
  }).forEach(function(v){
    container.appendChild(v.dom);
  });
  if(sort_order === 'desc'){ sortIconChange(element, 'asc'); }else{ sortIconChange(element, 'desc'); }
}