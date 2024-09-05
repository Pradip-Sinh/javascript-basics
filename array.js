// let vegitable= ["potato","bringle","cabbage"];
// vegitable[0]= "corn";
// console.log(vegitable);


// for loop 
// let heroes=["ironman","bulkman","thor","batman"];
// for(let i=0; i<heroes.length;i++)
// {
//     console.log(heroes[i]);
// }

// using for of loop

// let customers=["pradip","bhavin","dharmesh","ankit"];
// for(let customer of customers)
// {
//     console.log(customer);
// }


/*for given array with marks of student [85,97,44,37,76,60]
find the average marks of the entire class 

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of marks) {
    sum += val;// sum = val + 1
    console.log(val)
}
let avg = sum / marks.length;
console.log(`average marks of class = ${avg}`);

/* for given aary with prices of 5 item [250,645,300,900,50] 

let items = [250, 645, 300, 900, 50];

let i = 0;
for (let val of items) {
    console.log(`value at index ${i}=${val}`);
    let offer = val /10;
    items[i]= items [i] - offer;
    console.log(`value after offer =${items [i]}`);
    i++;

}
// using for loop

for (let i=0; i< items.length; i++)
{
    let offer = items[i]/10;
    items [i] -= offer
}
console.log(items);*/

// push ()
// let arr=[1,2,4,3,];
// console.log("after push operation",arr.push(5,6,7));
// console.log(arr);
// //pop operation
// console.log("after pop operation",arr.pop(7));
// console.log(arr);

// convert arry to string
// console.log(arr.toString());

// concat multiple array
// let no= [1,2,3,4,5];
// let no2=[6,7,8,9,10];
// console.log(no.concat(no2));

// unshift and shift 
// let num= [1,2,3,4,];
// console.log(num.unshift(6));
// console.log(num);
// console.log(num.shift(6));
// console.log(num);

// slice it return aa piece of the array

// let arr= [ 1,2,3,4,5,6,7,8,9,];
// console.log(arr.slice(2,5));  //always at the end -1

// splice change the original array (add ,delete,newelement)

// let num=[1,2,3,5,5,6,7,8];
// console.log (num.splice(2,1,9)) ;
// console.log(num);
// console.log(num.splice(2,1,3)); // replace 9 to again 3
// console.log(num)
// console.log(num.splice(4,1);
// console.log(num);

/* create an array to store companies
["bloomberg","microsoft","Uber","Google","Uber","IBM",Netflix]
1:Remove the first company from the array 
2:Remove Uber & add ola in its place 
3:Add Amazon at the end */

let companies = ["bloomberg","microsoft","Uber","Google","Uber","IBM","Netflix"];
let shift=companies.shift(1);// i personaly use shift method but you can also use splice method like (0,1)
console.log(companies);
// now we have new array: ["microsoft","Uber","Google","Uber","IBM","Netflix"];
let replace= companies.splice(1,1,'Ola');// here i use splice method 
console.log(companies);
// Right now our array look like this : ["microsoft","Ola","Google","Uber","IBM","Netflix"];

let addNewCompanie= companies.push('Amazon');
console.log(companies);
// final output after solving question :[ 'microsoft', 'Ola', 'Google', 'Uber', 'IBM', 'Netflix', 'Amazon' ]
console.log(companies.toString());




