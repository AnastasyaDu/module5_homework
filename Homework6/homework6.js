let arr = [4, 4, 4];
let isEqual = true;
let reference = arr[0];

for (let item of arr) {
	if (item !== reference) {
		isEqual = false;
	}
}

arr.forEach(function(item, index, array) {
    if (item !== reference) {
		isEqual = false;

	}
 });
 console.log(isEqual);