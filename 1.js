//First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
//Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
function vowelsAndConsonants(arr) {
     arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let vowel = [];
    let nonVowel = [];
    for(let value of arr)
    {
        if(['a','e','i','o','u'].includes(value))
        {
            vowel.push(value+'\n');
        }else{
            nonVowel.push(value+'\n');
        }
    }
    console.log(vowel.join('')+nonVowel.join(''));
}
vowelsAndConsonants();