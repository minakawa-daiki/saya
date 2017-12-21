window.addEventListener('turbolinks:load', function() {
  var parser = new URL(location.href);
  if(document.getElementsByName('csv')[0]){
    document.getElementsByName('csv')[0].selectedIndex = parser.searchParams.get("csv");
    document.getElementsByName('csv')[0].addEventListener('change', function (e) {
      location.href = '/recent?csv='+ e.target.value;
    });
  }
  if(document.getElementsByName('sample_csv')[0]){
    document.getElementsByName('sample_csv')[0].selectedIndex = parser.searchParams.get("csv");
    document.getElementsByName('sample_csv')[0].addEventListener('change', function (e) {
      location.href = '/sample?csv='+ e.target.value;
    });
  }
});