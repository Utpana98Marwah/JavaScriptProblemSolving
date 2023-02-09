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
//------------------------------------------------------------------
//transformToObjects()
//[{val: 1}, {val: 2}, {val: 3}]
let numbers = [1, 2, 3];
let result = numbers.map(function(num){
    return {val:num}
});
console.log(result);