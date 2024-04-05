 // const button = document.getElementById("btn");
// console.dir(button);
// 01. Function Declaration vs Fucntion Expression
// Function Declaration
// function run() {
//   console.log("Run");
// }

// Function Expression
// let fly = function () {
//   console.log("Fly");
// };

// console.dir(fly())

// Named Function Expression
// let fly1 = function fn() {
//   console.log("fly1");
// };

// Atom = A(no) + tomos

// Anonymous Function Expression
// let fly2 = function () {
//   console.log("fly2");
// };

// let move = fly2;
// fly1();
// console.log(move);

// 02. Hoisting
// Function Declaration

// run()
// function run() {
//   console.log("Run");
// }

// run()

// Function Expression
// fly()
// const fly = function () {
//     console.log("fly");
// };

// Hoisting -> it is the process of moving a function declaration to the top of the file

// 03. Arguments

// function sum() {
//     console.log(arguments);
//     let total = 0;
//     for (const iterator of arguments) {
//       total += iterator;
//     }
//     return total;
// //   }
  
  // console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
  
  // let arr = [2, 3, 4, 5];
  // // console.log(arr)
  // let obj = {
  //     name: "Aninda",
  //     profession: "Developer"
  // }
  
  // function test(kichuEkta){
  //     for (const iterator of kichuEkta) {
  //         console.log(iterator)
  //     }
  // }
  
  // test(arr)
  // test(obj)
  
  // 04. The Rest Operator
  
  // function sum2(...args) {
  //   return args.reduce((prev, curr) => prev + curr, 0);
  // }
  // console.log(sum2(1, 2, 3, 4, 5, 6));
  
  // function sum3(discount,shopName, ...prices ) {
  
  //   const total = prices.reduce((a, b) => a + b, 0);
  //   return total * (1 - discount);
  // }
  // console.log(sum3(0.1,"Shafin Mobile shop", 20, 30, ));
  
  // 05. Default Parameter
  
//   function interest(priciple, rate= 1.5 , years = 2){
      // years = years || 2
    //   return priciple * rate / 100 * years
//   }
  
//   console.log(interest(100)) 
// 06. Getters and setters
// const person = {
//   firstName: "Ibtesum",
//   lastName: "Aninda",
//   age: 10,
//   fullname(){
//     return person.firstName + " " + person.lastName
//   }
// }
// person.fullName = "Samiul Muztaba"

// But this is Read-only

// console.log(person.firstName +" " + person.lastName)
// console.log(`${person.firstName} ${person.lastName}`)

// console.log(`I am ${person.firstName} ${person.lastName}`)
// console.log(person.fullname())

// getters => access property
// setters => change (mutate) them

// const person1 = {
//   firstName: "Ibtesum",
//   lastName: "Aninda",
//   get fullName(){
//     return `${person1.firstName} ${person1.lastName}`
//   },
//   set fullName (value){
//     let parts = value.split(" ")
//     this.firstName = parts[0]
//     this.lastName = parts[1]
//   }
// }

// person1.fullName = "Samiul Muztaba"

// console.log(person1.fullName)

// person1.fullName = "Aditya Banerjee"
// console.log(person1.fullName)

// person1.fullName = "Shafin Al Islam"

// console.log(person1.fullName)

// 07. Try Catch

// Defensive programming --> Write error cases at the beginning of a function

// const person1 = {
//   firstName: "Ibtesum",
//   lastName: "Aninda",
//   get fullName() {
//     return `${person1.firstName} ${person1.lastName}`;
//   },
//   set fullName(value) {
//     if (typeof value !== "string")
//       throw new Error("Please give your full name in string format!");

//     let parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// // person1.fullName = true
// try{
//   person1.fullName = null;
// } catch(error){
//   // alert(error)
// }

// 08. Local vs Global Scope


// const text = "Hello World";


// {
//   const text = "hijibiji"
//   console.log(text);
// }

// console.log(text);

// const x = "hey"

// function func(){
//   console.log(x)
// }

// func()```
// 01. Function Declaration vs Fucntion Expression
// Function Declaration
// function run() {
//   console.log("Run");
// }

// Function Expression
// let fly = function () {
//   console.log("Fly");
// };

// console.dir(fly())

// Named Function Expression
// let fly1 = function fn() {
//   console.log("fly1");
// };

// Atom = A(no) + tomos

// Anonymous Function Expression
// let fly2 = function () {
//   console.log("fly2");
// };

// let move = fly2;
// fly1();
// console.log(move);

// 02. Hoisting
// Function Declaration

// run()
// function run() {
//   console.log("Run");
// }

// run()

// Function Expression
// fly()
// const fly = function () {
//     console.log("fly");
// };

// Hoisting -> it is the process of moving a function declaration to the top of the file

// 03. Arguments

function sum() {
  console.log(arguments);
  let total = 0;
  for (const iterator of arguments) {
    total += iterator;
  }
  return total;
}

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

// let arr = [2, 3, 4, 5];
// // console.log(arr)
// let obj = {
//     name: "Aninda",
//     profession: "Developer"
// }

// function test(kichuEkta){
//     for (const iterator of kichuEkta) {
//         console.log(iterator)
//     }
// }

// test(arr)
// test(obj)

// 04. The Rest Operator

// function sum2(...args) {
//   return args.reduce((prev, curr) => prev + curr, 0);
// }
// console.log(sum2(1, 2, 3, 4, 5, 6));

// function sum3(discount,shopName, ...prices ) {

//   const total = prices.reduce((a, b) => a + b, 0);
//   return total * (1 - discount);
// }
// console.log(sum3(0.1,"Shafin Mobile shop", 20, 30, ));

// 05. Default Parameter

// function interest(priciple, rate= 1.5 , years = 2){
//     // years = years || 2
//     return priciple * rate / 100 * years
// }

// console.log(interest(100))

// ```// 08. Local vs Global Scope

// const text = "Hello World";

// function a() {
//   const text = "hijibiji";
//   console.log(text);
//   if (true) {
//     const tea = "I love it";
//     const text = "aso";
//     console.log(text);
//     console.log(tea);
//   }
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }

// }
// a();

// function a() {
//   const text = "sldfsdf";
//   console.log(text)
// }

// console.log(text);

// const x = "hey"

// function func(){
//   console.log(x)
// }

// func()

// 09. Let vs Var

// for(var j = 0; j<5; j++){
//   console.log(j)
// }

// console.log(j)

// function test(){
//   var x = "something"
//   console.log(x)
// }

// test()
// console.log(x)

// 10. this keyword

// method ---> obj
// function ---> global(window, global)

// const video = {
//   title: "Class going on",
//   play() {
//     console.log(this);
//   },
// };

// video.play();
// video.stop = function(){
//   console.log(this)
// }

// video.stop()


// function playIt() {
//   console.log(this)
// }
// playIt()

// function playVideo(title, name) {
//   this.titl = title;
//   this.nam = name;
//   // console.log(this);
// }

// const aName = new playVideo("hello", "Aninda"); // {}
// console.log(aName)



// function obstacle(height, width, speed) {
//   this.height = height;
//   this.width = width;
//   this.speed = speed;
// }
// const secondObstacle = {
//   height: 14,
//   width: 15,
//   speed: 20
// }



// const firstObstacle =  new obstacle(13, 1, 12);
// console.log(firstObstacle)

// console.log(firstObstacle)
// console.log(this.document);const video = {
//   title: "Amader Title",
//   tags: ["a", "b", "c"],
//   showTags() {
//     const self = this;
//     this.tags.forEach(function (tag) {
//       console.log(this);
//       console.log(this.title, tag);
//     }, this);
//  },
// };

// video.showTags();

// Changing this: Call, apply
// Solution as all the methods dont have the thisArg

function test() {}

const person = {
  fullName: function (age, birthday) {
    return this.firstName + " " + this.lastName + " " + age + ", " + birthday;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(person.fullName.call(person2, 30, "1 Dec"));

console.log(person.fullName.apply(person1, [30, "2 Dec"]));