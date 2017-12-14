function sortIconChange(element, type){
  var sort_icon = element.querySelector('.sort-icon');
  if(type === 'desc'){
    sort_icon.classList.remove("sort-icon-up");
    sort_icon.classList.add("sort-icon-down");
  }else{
    sort_icon.classList.remove("sort-icon-down");
    sort_icon.classList.add("sort-icon-up")
  }
}
