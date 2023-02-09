// Get second largest number
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