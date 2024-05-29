// function fizzBuzz (input){if (input%3===0&&input%5===0)
//     return "fizzBuzz"
// else if (input%3===0)
//  return "fizz" 
// else if (input%5===0)
// return "Buzz"
// else return "Can't include in function"
// }
// console.log(fizzBuzz(15));
// function showNumber(limit){ 
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) {
//       console.log(i + ' is" even"');
//     } else {
//       console.log(i + ' is "odd"');
//     }
//   }
// }

// console .log (showNumber(990))
// // ```

// // This code defines a function called `showEvenOddNumbers` that takes a `limit` parameter. It uses a `for` loop to iterate from 0 to the provided limit. Inside the loop, it checks if the current number (`i`) is divisible evenly by 2 using the modulo operator `%`. If the result is `0`, then the number is even and it is displayed as such. Otherwise, it is considered an odd number and displayed accordingly.

// // In the example, if you call `showEvenOddNumbers(10)`, it will output:
// // ```
// // 0 is even
// /*1 is odd
// 2 is even
// 3 is odd
// 4 is even
// 5 is odd
// 6 is even
// 7 is odd
// 8 is even
// 9 is odd
// 10 is even
// ```*/
// function maximum (num1,num2){return num1>num2 ? num1 : num2}
// let maxValue = maximum ( 76545679 ,9876544567890 )
// console.log ( maxValue)

// function whoareyou( code ){if ( code <= 5999) return "PLS "
// else if ( code <= 8999 )return" SLS "
// else if ( code <=10999 )return "HLS "
// else return "OLS" } 
// let ls =whoareyou ( 9999)
// console.log(ls);



// // Swapping variable solution
//  let a = "red";
// let b = "green"
//  let c;
//  c = a
// a = b
//  b = c

//  console.log("a", a)
//  console.log("b", b)
// // console.log("C :", c)jodfclmeosdxckl kjmmmmmmnjuhygb

// function checkSpeed(speed){
//     speed = Math.floor(speed);
//     let points = 0;
//     if(speed > 74){
//    for(let i = 75; i < speed+1; i+=5) points = points + 1;
//    if (points < 12) console.log("you're point is: ", points);
//    else console.log("you're point is: ", points,"& YOUR LICENSE SUSPENDED!");
//   }else console.log("you're point is: ", points,"and you're driving speed is ok");}

// checkSpeed(99999)
// let arr=[2,5,1,3]
//  function countTruthy(array){
//      let truevalues = 0;
//      for (let i = 0; i < array.length; i++) {
//        const element = array[i];
//        if (element) {
//            truevalues++;
//      };
//    };
//    console.log("the number of truthy values is: ", truevalues);
// };console.log(countTruthy( arr));
// function sumofmutiples3and5(limit){
//     let storageof3 = 0;
//     let storageof5 = 0;
//     let sum = 0;
//     for(let i = 1; i < limit; i++){
//         if (i % 3 == 0) {
//             storageof3 = limit;
//             sum += storageof3
//         }
//         if (i % 5 == 0) {
//             storageof5 = limit;
//             sum += storageof5; 
//         }
//     }
//     console.log("sum of 3 and 5: ", sum);

// }
// // assignment 06: Show All the "string properties" of an object

// function showProperties(obj) {
//   for (let key in obj) {
//       if (typeof obj[key] === 'string') {
//           console.log(key, obj[key]);   
//       }
//  else return " Not available" }
// }console.log(showProperties( "joy time "))
 

// let a = "5";
// let b = 3;
// console.log(a + b);

// 12.Every and some
// const ages = [32, 33, 16, 40];

// const output = ages.some(function (age) {
//   return age > 18;
// });

// console.log(output)

// function checkAge(age) {
//   return age > 18;
// }

// 13. map() method
// const numbers = [65, 44, {}, 4];
// const newArr = numbers.map((num, i) => {
//   console.log(i)
//   return num * 10
// });

// console.log({ numbers });
// console.log({ newArr });

// const persons = [
//   { firstname: "Malcom", lastname: "Reynolds" },
//   { firstname: "Kaylee", lastname: "Frye" },
//   { firstname: "Jayne", lastname: "Cobb" },
// ];

// const fullName = persons.map((person, index) => {
//   return [person.firstname, person.lastname].join(" ");
// });

// console.log(fullName);
// persons.map(getFullName);
// function getFullName(item) {
//   return [item.firstname,item.lastname].join(" ");
// }


// function createCircle (radius ){
//    return  {
// radius ,
//  draw:function () {
//     console.log("draw");
//   }
//  }
// }

// const circle=createCircle (1)

// 09. Enumerating Properties

// to enumerate
// for in loop

// to get all the keys
// Object.keys()

// const myObj = {
//   name: "amar obj",
//   age: 29
// }

// console.log(Object.keys(myObj))

// to check
// in obj

// if('name' in myObj) console.log("yaaay")

// 10. Abstraction
// Hide the details, show only the essentials

// function Book(pageNumber, name) {
//    console.log(this);
//    this.page = pageNumber;
//    this.name = name;
//    let defaultPageSize = "A4";
//    let computePageCost = function () {
//      // ....
//      console.log(defaultPageSize);
//    };
//    this.buy = function (numOfCopy) {
//      computePageCost();
//    };
//    this.read = function () {
//      console.log(`Reading ${this.name}. It has ${this.page} pages`);
//    };
//    console.log(this);
//  }
 
 
//  // const book = new Book(10, "YDKJSY");
 
//  // console.log(book);
//  // book.buy()
 
//  // 11. Private properties and methods
//  // Using local variable
 
//  // 12. Getters and Setters
 
//  function Book(pageNumber, name) {
//    this.page = pageNumber;
//    this.name = name;
//    let defaultPageSize = "A4";
//    let computePageCost = function () {
//      // ....
//      console.log(defaultPageSize);
//    };
 
//    // this.text = "Fantastic Book"
 
//    Object.defineProperty(this,"text",{
//      value: "Nice Book!"
//    })
 
//    let imageURL = "www.faltu.com"
 
//    Object.defineProperty(this, "image", {
//      get : function (){
//        return imageURL
//      }
//    })
//  }
 
//  const book = new Book(10, "YDKJSY")
//  const book2 = new Book(15, "Faltu Book")
 
 
 
//  console.log(book)
//  console.log(book2)
 
 
 
 
//  // Define object
//  const obj = {counter : 0};
 
//  // Define setters and getters
//  Object.defineProperty(obj, "reset", {
//    get : function () {this.counter = 0;}
//  });
 
 
 
 
 
 
 
//  Object.defineProperty(obj, "increment", {
//    get : function () {this.counter++;}
//  });
//  Object.defineProperty(obj, "decrement", {
//    get : function () {this.counter--;}
//  });
 
 
 
//  Object.defineProperty(obj, "add", {
//    set : function (value) {
//      console.log(value)
//      this.counter += value;}
//  });
 
 
 
 
//  Object.defineProperty(obj, "subtract", {
//    set : function (value) {this.counter -= value;}
//  });
 
//  // Play with the counter:
//  obj.reset;
//  obj.add = 5;
//  obj.subtract = 1;
//  obj.increment;
//  obj.decrement;
 
// //  ```
// 01. Creating your own Prototypical inheritance

// function Shape() {}

// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.duplicate = function () {
//   console.log("duplicating");
// };
// function Square() {
//   // ...
// }

// Square.prototype.duplicate = function () {
//   console.log("duplicating");
// };

// Circle.prototype = Object.create(Object.prototype); // objectBase

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;
// Circle.prototype.draw = function () {
//   console.log("draw");
// };
// const c = new Circle(1);
// const sq = new Square();
// console.log(Circle.prototype);
// console.log(c.constructor)
// // Circle.prototype.duplicate = function () {
// //   console.log("duplicate");
// // };

// Square.prototype.duplicate = function () {};

// const c = new Circle(1);
// const s = new Shape();
// --------------------------------
// 02. Resetting the Constructor

// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor() => new Circle()
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
// console.log(Circle.prototype);
// const c = new Circle(1);
// console.log(c.constructor)

// 03. Calling the Super Constructor
// function Shape(color) {
//   this.color = color; // look
// }

// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function Circle(radius, color) {
//   Shape.call(this, color);
//   this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// function Square(color) {
//   Shape.call(this, color);
// }

// const c = new Circle(1, "blue"); // {}
// const s = new Square("Red");

// 04. Intermediate Function Inheritance
// extend

// function Shape(color) {
//   this.color = color; // look
// }

// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }
// function Circle(radius, color) {
//   Shape.call(this, color);
//   this.radius = radius;
// }

// extend(Circle, Shape);

// Circle.prototype.draw = function () {
//   console.log("draw");
// };

// function Square(size) {
//   this.size = size;
// }

// extend(Square, Shape);

// ```
