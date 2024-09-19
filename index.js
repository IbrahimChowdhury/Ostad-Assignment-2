

// Assignment Solution 



// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument

function calculateDifference(a,b){
    let diff=Math.abs(a-b);
    return diff;
}
console.log(calculateDifference(20,200))




// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not
 function  isOdd(a){
    if(a%2==1 || a%2==-1){
        return true
    }
    return false
 }
 console.log(isOdd(10))
 



//  3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.
function findMin(ary){
       return Math.min(...ary)
}
console.log(findMin([10,2,3,5,20,100]))




// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers
function filterEvenNumbers(ary){
    return ary.filter(x=>x%2==0)
}
console.log(filterEvenNumbers([10,2,3,5,20,100,101,23]))




// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order
function sortArrayDescending(ary){

    return ary.sort((a,b)=>b-a)

}
console.log(sortArrayDescending([10,2,3,5,20,100,101,23]))





// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
function lowercaseFirstLetter(str)
{
    if(!str){
        return str
    }
    let ltr=str[0].toLowerCase()
    let newstr=str.slice(1,str.lenght)
    return ltr+newstr      
    
}
console.log(lowercaseFirstLetter("Hellow eeryone"))






// 7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
function countVowels(str){
 let vowels="aeiouAEIOU"
 return [...str].filter(char=>vowels.includes(char)).length
}
console.log(countVowels("Hellow everyone"))




// 8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.
function findAverage(arr){
    let sum=0
    let length=arr.length
    arr.forEach(i=>sum+=i)
    
    return parseFloat(sum/length).toFixed(2)
}
console.log(findAverage([10,10,10,10,10]))