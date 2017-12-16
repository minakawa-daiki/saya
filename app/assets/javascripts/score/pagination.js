window.addEventListener('turbolinks:load', function() {
  var pagination_container = document.querySelector('.pagination');
  var all_count = 0;
  if(pagination_container){
    var el = document.querySelectorAll('.record-content');
    all_count = el.length;
    updatePage(el, 1, all_count);
  }
});

function pageCreate(el, page_count, pagination_container){
  var pagination = pagination_container.getElementsByTagName('ul')[0];
  if(pagination){pagination_container.removeChild(pagination_container.getElementsByTagName('ul')[0]);}
  var ul = document.createElement("ul");
  ul.classList.add('pagination_ul');
  for(var i = 1; i < page_count + 1; i++){
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
  document.querySelectorAll('.pagination_button').forEach(function (t) {
    t.addEventListener('click', function (e) {
      document.querySelectorAll('.pagination_button')[0].style.backgroundColor = null;
      document.querySelectorAll('.pagination_button')[e.target.dataset.page - 1].style.backgroundColor = '#696969';
    });
  });
  if(document.querySelectorAll('.pagination_button')[0]){
    document.querySelectorAll('.pagination_button')[0].style.backgroundColor = '#696969';
  }
}

function updatePage(el, start, count) {
  if(count === 0){
    pageCreate(el, 0, document.querySelector('.pagination'));
  } else {
    pageCreate(el, Math.floor(count / 100) + 1, document.querySelector('.pagination'));
  }

  var trueElm = [];
  el.forEach(function (val) {
    if(val.dataset.enable === 'true' && val.dataset.searched === 'true'){ trueElm.push(val); }
  });
  trueElm.forEach(function (val, index) {
    if(start - 1 <= index && index < start + 99){
      val.style.display = 'flex';
    }else {
      val.style.display = 'none';
    }
  });

  var ec = document.querySelector('.element-count');
  var all = ec.querySelector('.all');
  all.textContent = count;
  ec.querySelector('.start').textContent = (count > 0 ? start : 0).toString();
  if(start + 99 < Number(all.textContent)){
    ec.querySelector('.end').textContent = start + 99;
  } else {
    ec.querySelector('.end').textContent = all.textContent;
  }
}

function updatePageWithCheck() {
  var el = document.querySelectorAll('.record-content');
  var count = 0;
  document.querySelectorAll('.record-content').forEach(function (t) {
    if(t.dataset.enable === 'true' && t.dataset.searched === 'true'){ count++; }
  });
  updatePage(el, 1, count);
}
