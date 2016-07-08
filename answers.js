//Write a function called printPositives that takes an array and uses the forEach method to print only the positive numbers.
var myArray = [0,8,10,-4,3,-10,-1];

function printPositives(arrayItem) {
    if (arrayItem > 0) {
        console.log(arrayItem);
    }

};

myArray.forEach(printPositives)

//Similar to the previous exercise, write a function called getPositives that takes an array and uses the filter method to 
//return a new array with only the positive numbers.