//sort function
//->unlike the map, filter and reduce method, the sort method mutates the original array

//sorted in ascending order
const arr = [1, 5, 100, 4, 9];
let sorted_array = arr.sort((a, b) => a - b);
console.log(sorted_array);

//for descending use (b-a)
let descending_sort = arr.sort((a, b) => b - a);
console.log(descending_sort);

//sort method mutates the original array. in order to avoid we can use slice for it
let array_num = [1, 5, 9, 40, 3];
let new_sorted = array_num.slice().sort((a, b) => b - a);
console.log(new_sorted); //output:[40, 9, 5, 3, 1]
console.log(array_num); //output:[1, 5, 9, 40, 3]
