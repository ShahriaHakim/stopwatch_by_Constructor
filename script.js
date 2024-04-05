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

const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

const fullName = persons.map((person, index) => {
  return [person.firstname, person.lastname].join(" ");
});

console.log(fullName);
// persons.map(getFullName);
// function getFullName(item) {
//   return [item.firstname,item.lastname].join(" ");
// }