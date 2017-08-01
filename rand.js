function rand(arr) {
	this.arr = arr,
	this.random = function(ar) {
		ar = this.arr;
		var pos = Math.floor((Math.random() * arr.length) + 0);
		return ar[pos];
	}
}

var array = new rand([1, 2, 456, 878, 45, 56, 78, 89, 83, 5, 9, 999, 511, 664, 0])

console.log(array.random())