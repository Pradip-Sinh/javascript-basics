// print all even number from 0 to 100

// for (let i=0; i<=100; i++)
// {
//     if ( i % 2 ==0)
//     {
//         console.log("i=",i);
//     }
// }

/* Question 2: Create a game where you start with any random game number.ask the user to keep guessing the game 
number until the user enter corect value.*/

// let gameNum= 17;
// let usernum=prompt("Guess the number :");

// while (usernum != gameNum)
// {
//     usernum=prompt("wrong number,please try again :");
// }
// console.log(" conguratulation, Your guess number is right ");

let n=10;
sum=0;
i=0;
do{
    sum= sum + i;
    i++
}while(i <= n);


console.log(sum);