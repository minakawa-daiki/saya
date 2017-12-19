window.addEventListener('turbolinks:load', function() {
  var parser = new URL(location.href);
  if(document.getElementsByName('compare_csv1')[0]){
    var csv1_a = parser.searchParams.get("csv1");
    var csv2_a = parser.searchParams.get("csv2");
    if(!csv1_a){ csv1_a = 0; }
    if(!csv2_a){ csv2_a = 1; }
    document.getElementsByName('compare_csv1')[0].selectedIndex = csv1_a;
    document.getElementsByName('compare_csv1')[0].addEventListener('change', function (e) {
      location.href = '/compare?csv1='+ e.target.value + '&csv2=' + csv2_a;
    });
  }
  if(document.getElementsByName('compare_csv2')[0]){
    var csv1_b = parser.searchParams.get("csv1");
    var csv2_b = parser.searchParams.get("csv2");
    if(!csv1_b){ csv1_b = 0; }
    if(!csv2_b){ csv2_b = 1; }
    document.getElementsByName('compare_csv2')[0].selectedIndex = csv2_b;
    document.getElementsByName('compare_csv2')[0].addEventListener('change', function (e) {
      location.href = '/compare?csv1=' + csv1_b + '&csv2='+ e.target.value;
    });
  }
});