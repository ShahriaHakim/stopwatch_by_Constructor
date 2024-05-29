// stopwatch in console
function Stopwatch() {
    let startTime = null;
    let endTime = null;
    let running = false;
  
    // Start the stopwatch
    this.start = function () {
      if (running) {
        console.log("Stopwatch is already running.");
        return;
      }
      startTime = new Date();
      running = true;
      console.log("Stopwatch started.");
    };
  
    // End the stopwatch
    this.end = function () {
      if (!running) {
        console.log("Stopwatch is not running.");
        return;
      }
      endTime = new Date();
      running = false;
      console.log("Stopwatch stopped.");
      this.calculateDuration();
    };
  
    // Calculate and display the duration
    this.calculateDuration = function () {
      if (startTime && endTime) {
        const duration = (endTime - startTime) / 1000; // Convert to seconds
        console.log(`Duration: ${duration.toFixed(2)} seconds`);
      } else {
        console.log("Start and end times are required to calculate duration.");
      }
    };
  }
  
  // Example usage
  const stopwatch = new Stopwatch();
  stopwatch.start(); // Start the stopwatch
  setTimeout(() => {
    stopwatch.end(); // End the stopwatch after a delay (simulating user input)
  }, 3000); // Change the delay as needed
//   github e repository creat kor
//   then jei file upload korbi oi file er theke terminal open kor
// kih! eto jibon jeivabe kore asis
// git hub e dhuke dekh
// upore buttons thake kichu
// repository creat er pore oi khan ei commads diye dibe
// ogulo just copy paste
// terminal e
// that's it