function Rand(arr) {
	this.arr = arr
}

Rand.prototype.random = function() {
		var pos = Math.floor((Math.random() * this.arr.length) + 0);
		console.log(this.arr[pos]);
}
	
var array = new Rand([1, 2, 456, 878, 45, 56, 78, 89, 83, 5, 9, 999, 511, 664, 0]);

array.random()