let count = 0;
$('#click').click(function(e) {
  count = count + 1;
  document.getElementById("counter").innerHTML = "You clicked " + count + " times ";
});