class Clock {
  constructor() {
    const date = new Date(); 
    
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() { 
    this.printTime(); 
    this.seconds++;

    if(this.seconds == 60){
      this.seconds = 0;
      this.minutes++;
    }

    if(this.minutes == 60){
      this.minutes = 0;
      this.hours++;
    }

    if(this.hours == 24){
      this.hours = 0;
    }

  };
}

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if(numsLeft === 0) {
    completionCallback(sum); 
    reader.close();
  } else {
    reader.question('Input a number please: ', function(answer) {
      let num = parseInt(answer);
      let newSum = num + sum;
      let newNumsLeft = numsLeft - 1;
      
      console.log(`Sum equals ${newSum}`)
      addNumbers(newSum, newNumsLeft, completionCallback) // Recursive call
    })
  }
}

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// addNumbers(0, 4, number => {
//   console.log(`Your sum is: ${number}!!!!!!!!!`);
// });

function absurdBubbleSort(arr, sortCompletionCallback) {
}

// Prompts user to say if one number is greater than the other
function askIfGreaterThan(num1, num2, callback) {
  reader.question(`Is ${num1} greater than ${num2}? `, (answer) => {
    if (answer === 'yes') {
      answered = true;
      callback(true);
    } else if (answer === 'no') {
      answered = true;
      callback(false);
    }
  })
};

// Should bubble up an out-of-order number
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) { 

  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if (isGreaterThan) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      }

      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop); // Recursive call
    })
  }

  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}