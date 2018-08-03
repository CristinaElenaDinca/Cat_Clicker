
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
for (let i = 0; i <(arrayOfCats.length+1); i++) {
	//Creating a DOM element
    var elem = document.createElement('li');
    elem.textContent = arrayOfCats[i].name;
    //Adding the DOM element to the document
	let listOfCat = document.getElementById("list_of_cats");
	listOfCat.appendChild(elem);
	//adding an event listener
	elem.addEventListener('click', (function(catCopy) {
        return function() {
            //cleaning the display section
            document.getElementById('displaySection').innerHTML = '';
            //display on the section the name of the cat and the image
            document.getElementById('displaySection').innerHTML = 'You have clicked on ' 
            + catCopy.name + ' ' + catCopy.count + 
            ' times! This is ' + catCopy.name + ' <img src =' + catCopy.image + '>'
        };
    })(arrayOfCats[i]));
}

//Set the event for the immage

for (let i = 0; i < arrayOfCats.length+1; i++) {
	let cat = arrayOfCats[i];
	let imageOfCat = arrayOfCats[i].image;
	//adding an event listener
	elem.addEventListener('click', (function(catCopy) {
        return function() {
            //cleaning the display section
            document.getElementById('displaySection').innerHTML = '';
            //increment the nomber of clicks
            catCopy.count++;
            //renders the updated info
            document.getElementById('displaySection').innerHTML = 'You have clicked on ' 
            + catCopy.name + ' ' + catCopy.count + 
            ' times! This is ' + catCopy.name + ' <img src =' + catCopy.image + '>'
        };
	})(imageOfCat));
};


   