window.addEventListener('turbolinks:load', function() {
  var pagination_container = document.querySelector('.pagination');
  var page_num = 1;
  var all_count = 0;
  if(pagination_container){
    var el = document.querySelectorAll('.record-content');
    all_count = el.length;
    page_num = Math.floor(all_count / 100) + 1;
    updatePage(el, 1, all_count);
    pageCreate(el, page_num, pagination_container);
  }
});

function pageCreate(el, page_num, pagination_container){
  var pagination = pagination_container.getElementsByTagName('ul')[0];
  if(pagination){pagination_container.removeChild(pagination_container.getElementsByTagName('ul')[0]);}
  var ul = document.createElement("ul");
  ul.classList.add('pagination_ul');
  for(var i = 1; i < page_num + 1; i++){
    var li = document.createElement("li");
    li.classList.add('pagination_button');
    li.textContent = i;
    li.dataset.page = i;
    ul.appendChild(li);
    li.addEventListener('click', function (e) {
      var count = 0;
      el.forEach(function (t) {
        if(t.dataset.enable === 'true'){ count++; }
      });
      updatePage(el, ( e.target.dataset.page - 1 ) * 100 + 1, count);
    });
  }
  pagination_container.appendChild(ul);
}


function updatePage(el, start, count) {
  pageCreate(el, Math.floor(el.length / 100) + 1, document.querySelector('.pagination'));
  el.forEach(function (val, index) {
    if(start - 1 <= index && index < start + 99){
      val.style.display = 'flex';
    }else {
      val.style.display = 'none';
    }
  });
  var ec = document.querySelector('.element-count');
  var all = ec.querySelector('.all');
  all.textContent = count;
  ec.querySelector('.start').textContent = start;
  if(start + 99 < Number(all.textContent)){
    ec.querySelector('.end').textContent = start + 99;
  } else {
    ec.querySelector('.end').textContent = all.textContent;
  }
}

function updatePageWithCheck() {
  var el2 = [];
  var count = 0;
  document.querySelectorAll('.record-content').forEach(function (t) {
    if(t.style.display === 'flex'){ el2.push(t); }
    if(t.dataset.enable === 'true'){ count++; }
  });
  if(count === 0){
    updatePage(el2, 0, count);
  } else {
    updatePage(el2, 1, count);
  }
}
