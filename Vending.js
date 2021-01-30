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


var total = 0;

function submitPay(money) {

	if (typeof(money) == 'string') {

		console.log('incorrect value has been entered');

	} else {
		
		return total += money				
	}
};

var insert =  console.log('You inserted $ ' + submitPay(10));




//The user should be able to select an item. The selected item can be passed into a function as a parameter.


function selectItem(item) {

	if (!snacks[item]) {

		console.log('No item')

	} else {

		console.log('Item costs $ ' + snacks[item]);
		
	}

}

 selectItem('Snickers');
 selectItem('Gushers');
 selectItem('Water');



