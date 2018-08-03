
class Cat {
	constructor  (name, source) {
		this.name = name;
		this.image = source;
		this.count = 0;
	}
}

let arrayOfCats = [];

arrayOfCats.push(
	new Cat("Thomas", "img/babyCat.jpg"), 
	new Cat("Sweetie", "img/CatEyes.jpg"), 
	new Cat("John", "img/catmoney.jpg"),
	new Cat("Happy", "img/GrumpyCat.jpg"),
	new Cat("Prince", "img/YellowEyes.jpg"),
	new Cat("Sir", "img/mustace.jpg"),
);


//Creating the list of cats to be displayed
for (let i = 0; i < arrayOfCats.length; i++) {
	let cat = arrayOfCats[i];
	//Creating a DOM element
    var elem = document.createElement('li');
    elem.textContent = cat.name;
    //Adding the DOM element to the document
	let listOfCat = document.getElementById("list_of_cats");
	listOfCat.appendChild(elem);
	//adding an event listener
	elem.addEventListener('click', (function(catCopy) {
        return function() {
            //cleaning the display section
            document.getElementById('displaySection').innerHTML = '';
            //display on the section the name of the cat and the immmage
            document.getElementById('displaySection').innerHTML = 'You have clicked on ' 
            + catCopy.name + ' ' + catCopy.count + 
            ' times! This is ' + catCopy.name + ' <img id = \"kity\"src =' + catCopy.image + '>';
            };
    })(cat));
};

//Set the event for the immage

for (let i = 0; i < arrayOfCats.length; i++) {
	let cat = arrayOfCats[i];
	let clicker = document.getElementById('displaySection');
	//adding event on image
	clicker.addEventListener('click', (function(catCopy) {
        return function() {
        	//increment the nomber of clicks
            catCopy.count++;
            document.getElementById('displaySection').innerHTML = '';
            //display on the section the name of the cat and the immmage
            document.getElementById('displaySection').innerHTML = 'You have clicked on ' 
            + catCopy.name + ' ' + catCopy.count + 
            ' times! This is ' + catCopy.name + ' <img id = \"kity\"src =' + catCopy.image + '>';
            };
    })(cat));
};

   