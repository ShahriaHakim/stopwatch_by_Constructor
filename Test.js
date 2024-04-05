// let xix =1234567890;
// console.log(xix*xix);
// console.log("hello world");
// console.log("supto"); '
// console.log(typeof("supto")); 
// number let num = 92099228 console.log(num);
// let num =12345678888,
// giouhbvghg
//  console.log(typeof(num)); 
 //number let num2 = 9209.9228 console.log(num2);
//   console.log(typeof(num2)); 
  //boolen value let student = true console.log(student);
//    console.log(typeof(student)); //comment  let isattentive; 
//    console.log(typeof isattentive) 
    // let isattentive2= undefined; 
    // console.log(typeof isattentive2) 
    //  let isattentive3=null; 
    //  console.log(typeof (isattentive3))
      //  let student2 ={     studentname: "supto'",
            // isalive: true, 
            //     // roll:2 } 
      //  console.log(student2) 
      //  console.log(typeof (student2) )
      //  console.log(student2.studentname)
        // console.log(student2["roll"]) 
          // Cannot be a reserved Keyword 
          // should be meaningful
           // Cannot start with a number (1name)
            // Cannot contain a space or hyphen (-)
             // Are case-sensitive 
              //  Upper Case(A,B, C) & Lower Case(a, b, c) 
                // let nameofProgrammer = "Virus"  
                // console.log(nameofProgrammer)     
                // const rollNumber = 9 //
  // rollNumber 
// Hour
// If hour is between 6am and 12pm: Good morning!
// if hour is between 12pm and 6pm: Good afternoon!
// Otherwise: Good Evening 
// for (let i=1 ;i <= 10 ;i++ ){console.log (i)}
// let teacher = { hisname:"aninda",AudioProcessingEvent }
// function findfromrange(num1,num2) { arrayB =[]
//   for ( let i = num1;i<=num2 ;i++ ) {arrayB.push(i)} return arrayB
// }console.log(findfromrange(5, 10));
// let numses = [1, 2, 3, 4,8,1,9,0,6,1]
// function includes(array, searchElement){
//   for( let i = 0;i<=array.length;i++ );
//   if (array[i]=searchElement);}
  
// console.log(numses.includes (1));

// function countOccurences(array, Element){
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === Element) {
//             count ++;
//         }
//     }
//     return count;

// }const numbs = [1, 2, 3, 4, 1];
//  const count = countOccurences(numbs, 1);
// console.log(count); 

// function findAllIndex(array, tar) {
//   let res = [];
//   for (let i = 0; i < array.length; i++) {
//       if (nums[i] === tar) {
//           res.push(i);
// //       }
// //   }
// //   return res;
// // }
// // const nums = [1, 2, 2, 2, 3, 4, 5];
// // const tar = 2;
// // console.log(findAllIndex(nums, tar));
 
// const button = document.getElementById("btn");
// console.dir(button);

// // // Event

// // const theme = {
// //   mode: "light",
// // };

// button.addEventListener("click", function () {

//   // Text change
//   if (button.innerText === "Ooops!") {
//     button.innerText = "Pops!";
//   } else {
//     button.innerText = "Ooops!";
//   }

//   // Theme change
//   if (theme.mode === "light") {
//     theme.mode = "dark";
//     colorChange()
//   } else {
//     theme.mode = "light";
//     colorChange()
//   }
//   console.log(theme);
// });


// function colorChange(){
//   if (theme.mode === "light") {
//     document.body.style.background = "cyan";
//     document.body.style.color = "black";
//   } else {
//     document.body.style.background = "black";
//     document.body.style.color = "white";
//   }
// }


// button.addEventListener("click", function(){
//   // console.log(button.innerText)
//   button.innerText = "Pops!"
// })

const button = document.getElementById("btn");
const hText = document.getElementById("introText")
console.dir(hText)

console.log(navigator);
const theme = {
  mode: "brown",
};

button.addEventListener("click", () => {
  if (theme.mode === "brown") {
    theme.mode = "light";
  } else if (theme.mode === "light") {
    theme.mode = "dark";
  }else {theme.mode="brown"}

  console.log(theme);
  if (theme.mode === "brown") {
    document.body.style.backgroundColor = "gray";
    document.body.style.color = "white";
  
  } else if (theme.mode === "light") {
    document.body.style.backgroundColor = "cyan";
    document.body.style.color = "black";
  }else   {
    document.body.style.backgroundColor = "rebeccapurple";
    document.body.style.color = "white";
  }
});
const Controller = document.getElementById("what");
const HText = document.getElementById("introText")
console.dir(HText)
const mover ={ 
  scroll : oi 
};for( let i = 0;i<=array.length;i++ );
 if (array[i]=searchElement);
 