// program wheather the  number is odd or even
// let num = prompt("Enter the Any number :");

// if ( num % 2 == 0)
// {
//     console.log("This Number is even number");
// }
// else
// {
//     console.log("This Number is odd number");
// }

//Question 1 : get user to input a number using promt ("Enter a number :").check if the number is a multiple of 5 or not 

// solve 5 % == 0 it is multiple of 5 number 

/*let number = prompt("Enter the number :");

if (number % 5 == 0) {
    console.log("This number is multiple of 5 ");
}
else {
    console.log("This number is not multiple of 5 ");
}
*/

// Question 2 : Write a code which can give grade to student according to their score

/* 
1. 90-100 grade "A"
2. 70-89 grade "B"
3. 60-69grade "C"
4. 50-59 grade "D"
5. 0-49 grade "FIAL"
*/

let marks = prompt("Enter the Marks out of 100 :");
if (marks >= 90 && marks <=100)
{
    console.log("Grade : A");
}
else if ( marks >= 70 && marks <= 89)
{
    console.log("Grade : B");
}
else if (marks >=60 && marks <= 69)
{
    console.log("Grade : C");
}
else if ( marks >= 50 && marks <= 59)
{
    console.log (" Grade : D");
}
else if ( marks >= 0 && marks <= 49)
{
    console.log("Fail");
}
