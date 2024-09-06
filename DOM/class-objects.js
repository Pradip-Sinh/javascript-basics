// //prototype example:
// const employee = {
//     text() {
//         console.log(" text is 10%");
//     }
// }

// const siddharth = {
//     sallary: 50000
// }

// siddharth.__proto__ = employee;

// // classis & constructor

// class TataCars {
//     constructor(brand) {
//         this.brand = brand;
//         console.log("Welcome to TataCars")
//     }
//     start() {
//         console.log("Start");
//     }
//     stop() {
//         console.log("Stop")
//     }
// }

// let Harrier= new TataCars();
// let nexon= new TataCars();

// Inheritance & super keyword

// class Person {
//     constructor(name){
//         this.species= "homo specience",
//         this.name=name;
//     }
//     eat(){
//         console.log("Eat");
//     }
// }
// class Engineer extends Person {// we want to do inherit  we use extends 
//     constructor(name){
//         super(name);// to invoke the parent class 
//     }
//     work (){
//         super.eat();
//         console.log("solve the problem ,build something .");
//     }
// }

// const engobj = new Engineer ("pradip");
// console.log(engobj);
// engobj.work();

/* practice question: You are creating a website for your college . create a class user with & properties ,name & email.
it also has a method called viewdata () that allows user to view website data.*/

class User {
    constructor (name, email){
        this.name=name,
        this.email=email
    }
    viewData(){
        console.log("view Data");
    }
}
//User 
const student1 = new User("pradip","pradipsinr");
const student2= new User ("Ankit","ankit@gmail.com");
const student3= new User ("vyom","vyom@gmail.com");
const student4= new User ("siddhu","siddhu@gmail.com");
const student5= new User ("abhi","abhi@gmail.com");

class Admin extends User {
    constructor(name,email){
        super(name,email);
        
    }
    editData(){
        console.log("Edit data only Admin");// 
    }
}

// Admin can changes all the data but user can not change any data
const admin1= new Admin("Admin","Admin123@gmail.com");

