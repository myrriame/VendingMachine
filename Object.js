var cal = {

	add: function(x,y) {
	return (x+y);
},

	sub: function(x,y) {
	return (x-b);
},

	mult: function(x,y) {
	return (x*y);
},

	div: function(x,y) {
	return(x/y);
},

	largestNum: function(arr) {
	
		var largest = arr[0];
	for(var i=0; i<arr.length; i++) {

		if(arr[i]>largest) {
			largest=arr[i];
		}
	}
		return largest;
}
	
};

var number = [1,2,3,4,5,6,10,7,9,8];

console.log(cal.largestNum(number));
