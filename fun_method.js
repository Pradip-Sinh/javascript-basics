// This is Function example
// function sum(a,b){// function defination inside the parentheses its call parameter (a,b)
//     return a + b ;
// }
// console.log(sum(5,7)); // Function call here it is inside the parentheses  now we call argument

//  Arrow funtion
// const sum = ((a, b) => {
//     return a + b;
// })
// console.log(sum(10,20));

/* Que: Create a function using the ' function 'keyword that takes a string as an argument & return the number of vowel
        in string*/

// function countervowel(str){
//     let count=0;
//     for(let char of str){
//         if(char === 'a' || char ==='e'||char === 'i' ||char === 'o'|| char === 'u')
//         {
//             count ++;
//         }
//     }
//     console.log(count);
    
// }

// console.log(countervowel("hello guys"));

//  create an arrow function to perform the same task

// const arrowCountVowel= (str)=>{
//     let i=0;
//     for (let char of str )
//     {
//         if(char === "a"|| char ==="e" || char === "i" || char === "o" || char === "u")
//         {
//             i++ 
//         }
       
//     }
//     console.log(i);
// }
// console.log(arrowCountVowel("hello"));

// Foreach ()

// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     let sqr= val * val
//     console.log(sqr);
// })
// console.log(arr);

// Map () Method
// let arr= [67,52,39];
// let newArr= arr.map((val)=>{
//     let mul= val * 2 ;
//     console.log(mul);
// })
// console.log(arr);// original array
// console.log(newArr);// new array with the result 

// Filter () Method 
// let array= [20,25,27,50,76,100,558,991,1526];
// let evenNumber= array.filter((idx,val)=>{
//     // let evenNum= val % 2===0;
//     // console.log(idx,evenNum);
//     //return val % 2 ===0;
// })
// console.log(evenNumber);
// console.log(array);

// Reduce () Method

// let arr= [ 1,2,3,4,5];
// let fact= arr.reduce((result,current)=>{
//     return result * current ;
// }
// console.log(fact);

/*QUESTION : we are give array of marks of student filter out of the  marks of student that 90+ 
let arr= [90,60,95,80,99,98,85]
const marks= arr.filter((val)=>{
    return val >=90 ; 
})
console.log(marks); */

/* Take a number n as input from the user .create an array of number from the 1 to n.
.Use the rreduce method to calculate  sum of all number in the array */

// let n = prompt("enter the number ");
// let arr= [];
// for (let i = 1; i<= n ; i++)
// {
//     arr[i-1]= i;
// }
//  console.log(arr);
//  let ArrReduce= arr.reduce((pre,cur)=>{
//     return pre + cur;
//  })
//  console.log(`Sum of all number : ${ArrReduce}`);
