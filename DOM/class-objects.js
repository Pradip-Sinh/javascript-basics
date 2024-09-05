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

let n = 10;
sum =0;
for (let i=1; i<=n; i++){
    sum= sum + i ;
    console.log(sum);
}

