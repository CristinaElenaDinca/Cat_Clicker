
let name1 = "Tomas";
let name2 = "SweetPie";
document.getElementById("catName1").innerHTML = "The cat's name is: " + name1;
document.getElementById("catName2").innerHTML = "The cat's name is: " + name2;
let count1 = 0;
$('#click1').click(function(e) {
  count1 = count1 + 1;
  document.getElementById("counter1").innerHTML = "You clicked " + name1 + " " + count1 + " times ";
});

let count2 = 0;
$('#click2').click(function(e) {
  count2 = count2 + 1;
  document.getElementById("counter2").innerHTML = "You clicked " + name2 + " " + count2 + " times ";
});