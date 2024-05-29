// console.log("Hello")
// function stopwatch (){
//     let starttime,stoptime,running,duration =0;
//     this.start =
//     This . stop = function () {
//       if (!running)throw new error("Stopwatch isn`t running");
//   running=false;
//   stoptime=new  Date();
//   const seconds =( stoptimep.getTime()-starttime.getTime())/1000;
//   duration+=seconds;
//     };
//     this . reset = function () {
//       starttime=null;
//       stoptime=null;
//   running=false;
//   duration=0;}
//   Object.defineProperty(this,'duration',{
//     get : function () {return duration;}
//   });}
//   function clock() {

//     const name = new date();
    
//   }
 
// let startTime;let elapsedTime = 0;let isRunning = false;function startStopwatch() {if (!isRunning) {startTime = Date.now() - elapsedTime; isRunning = true;  updateStopwatch();}else { isRunning = false; elapsedTime = Date.now() - startTime;}}function resetStopwatch() {isRunning = false;elapsedTime = 0;updateStopwatch();}
// function updateStopwatch() { const display = document.createElement('h1'); document.body.appendChild(display);
// function displayTime() {const currentTime = Date.now() - startTime;const minutes = Math.floor(currentTime / 60000);const seconds = Math.floor((currentTime % 60000) / 1000);const milliseconds = Math.floor((currentTime % 1000) / 10);
// display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
// if (isRunning) { requestAnimationFrame(displayTime);}}displayTime();}startStopwatch();
// Start the stopwatch when the script runs

// ```

// // You can run this code in a browser console to see the stopwatch in action. To start and stop the stopwatch, call the `startStopwatch()` function. The time will be displayed in hours,...
// function Stopwatch() {
//   let startTime;
//   let elapsedTime = 0;
//   let isRunning = false;

//   this.start = function () {
//     if (!isRunning) {
//       startTime = Date.now() - elapsedTime;
//       isRunning = true;
//       this.update();
//     } else {
//       isRunning = false;
//       elapsedTime = Date.now() - startTime;
//     }
//   };

//   this.reset = function () {
//     isRunning = false;
//     elapsedTime = 0;
//   };

//   this.update = function () {
//     const display = document.createElement('h1');
//     document.body.appendChild(display);

//     function displayTime() {
//       const currentTime = Date.now() - startTime;
//       const minutes = Math.floor(currentTime / 60000);
//       const seconds = Math.floor((currentTime % 60000) / 1000);
//       const milliseconds = Math.floor((currentTime % 1000) / 10);

//       display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;

//       if (isRunning) {
//         requestAnimationFrame(displayTime);
//       }
//     }

//     displayTime();
//   };
// }

// myStopwatch.start();
// function startStopwatch() {
//   let startTime = Date.now();
//   const interval = setInterval(() => {
//       const currentTime = Date.now();
//       const elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);
//       console.log(`Elapsed time: ${elapsedTimeInSeconds} seconds`);
//   }, 1000);

//   return interval;
// }

// // To start the stopwatch:
// const stopwatchInterval = startStopwatch();

// // To stop the stopwatch (e.g., after 10 seconds):
// setTimeout(() => {
//   clearInterval(stopwatchInterval);
//   console.log("Stopwatch stopped.");
// }, 10000); // Change the duration as needed


// const myStopwatch = new Stopwatch();