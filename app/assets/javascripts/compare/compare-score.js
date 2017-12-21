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

  if(document.getElementsByName('sample_compare_csv1')[0]){
    var csv1_sa = parser.searchParams.get("csv1");
    var csv2_sa = parser.searchParams.get("csv2");
    if(!csv1_sa){ csv1_sa = 0; }
    if(!csv2_sa){ csv2_sa = 1; }
    document.getElementsByName('sample_compare_csv1')[0].selectedIndex = csv1_sa;
    document.getElementsByName('sample_compare_csv1')[0].addEventListener('change', function (e) {
      location.href = '/sample/compare?csv1='+ e.target.value + '&csv2=' + csv2_sa;
    });
  }
  if(document.getElementsByName('sample_compare_csv2')[0]){
    var csv1_sb = parser.searchParams.get("csv1");
    var csv2_sb = parser.searchParams.get("csv2");
    if(!csv1_sb){ csv1_sb = 0; }
    if(!csv2_sb){ csv2_sb = 1; }
    document.getElementsByName('sample_compare_csv2')[0].selectedIndex = csv2_sb;
    document.getElementsByName('sample_compare_csv2')[0].addEventListener('change', function (e) {
      location.href = '/sample/compare?csv1=' + csv1_sb + '&csv2='+ e.target.value;
    });
  }
});