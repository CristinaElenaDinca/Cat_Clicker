let counter = 0;
$('.counter').click(function(e) {
  counter = counter + 1;
  document.getElementByClassName("counter").innerHTML = counter + "times ";
});