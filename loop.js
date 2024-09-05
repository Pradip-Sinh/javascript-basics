// for loop

// Calculate sume of 1 to n :
// let n=5;
// sum = 0;

// for (let i=1; i<=n; i++)
// {
//     sum= i + sum ;
// }
// console.log("sum of number:",sum);

//  While loop
// let i=1;
// let n=100;

// while (i <= n)
// {
//     console.log("i=",i);
//     i++;
// }

// for- of loop : we can work on the string and array

// let str= "Pradipsinh";

// for (let i of str)
// {
//     console.log("i=",i);

// }

// for in loop: it is use only object and array 

let student = {
    name : "pradip sinh",
    age : 23,
    cgpa : 6,
    ispass: true,
}
for (let key in student)
{
    console.log("key=",key,"value=",student[key]);
}
                  
