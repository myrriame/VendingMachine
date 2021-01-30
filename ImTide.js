//Store a list of items in an object with prices.

var snacks = {
	
		Snickers: 1.00,
		Gushers: 0.50,
		Gum: 0.25,
		PotatoChips: 1.50,
		Soda : 2.00,
		Water: 1.00
};



//There should be a function when called that returns all the items. 

function screen() {

	return snacks;
};

 console.log(screen());




//The user can be allowed to enter currency.

function submitPay(money) {

	if (typeof(money) == 'string') {

		console.log('incorrect value has been entered');

	} else {

		return money

	}
};

	var total = submitPay(10)

	console.log('You inserted $ ' + total);




//The user should be able to select an item. The selected item can be passed into a function as a parameter.

function selectItem(item) {

	if (!snacks[item]) {

		console.log('No item')

	} else {

		console.log('Item costs $ ' + snacks[item]);

	}

}

selectItem('Snickers');



//Have a function that returns the users change.

function cashBack(change) {

	if (total>snacks[change]) {

	return total -= snacks[change];

	} else if (total<snacks[change]) {

	return 'ERROR INSUFFICIENT FUNDS';
	
	} else {
	
	return '0.00';

	}
}; 


//To complete the assignment, have the user purchase 3 items from the machine and store it in the users bag.

cashBack('Snickers');

selectItem('Gushers');

cashBack('Gushers');

selectItem('Water');

console.log('Your change is $ ' + cashBack('Water'));




//Store the items returned from the machine into the users “bag”. The bag should be an array.

//Iterate through the bag and “eat” the items.

var bag = ['Water', 'Snickers','Gushers'];

for(var i=bag.length-1; i>=0; i--) {

	console.log (bag[i] + ' was eaten.');
};
	
console.log('Your bag is empty');



