window.addEventListener('turbolinks:load', function() {
  if(document.getElementsByName('csv')[0]){
    var parser = new URL(location.href);
    document.getElementsByName('csv')[0].selectedIndex = parser.searchParams.get("csv");
    document.getElementsByName('csv')[0].addEventListener('change', function (e) {
      location.href = '/recent?csv='+ e.target.value;
    });
  }
});