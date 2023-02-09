//---------------------------------------Q.1--------------------------------------
// Get  largest number

let nums = [2, 3, 6, 6, 4,5];
let largest = 0;
    for(let i of nums)
    {
        if (i > largest)
        {
            largest = i;
        }
    }
console.log(largest);


//--------------------------------------------Q.2--------------------------------------
//transformToObjects()
//[{val: 1}, {val: 2}, {val: 3}]

let numbers = [1, 2, 3];
let result = numbers.map(function(num){
    return {val:num}
});
console.log(result);


//----------------------------------------------Q.3--------------------------------------
//Remove duplicate values from array

let arr = [1,2,7,9,6,4,2,9];
let uniqueValues = [];
for(let i of arr){
  if(!uniqueValues.includes(i)){
    uniqueValues.push(i);
  }
}
console.log(uniqueValues.sort());
