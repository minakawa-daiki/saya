document.addEventListener('scroll', function () {
  var container = document.querySelector('#record-container');
  var head = document.querySelector('.record-head-wrap');
  if(container){
    if(container.getBoundingClientRect().top < 54){
      head.style.position = 'fixed';
      head.style.top = '0';
    }else{
      head.style.position = 'absolute';
      head.style.top = null;
    }
  }
});