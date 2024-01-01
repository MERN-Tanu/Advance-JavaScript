//  Given a value n (positive integer), print the following pattern on the screen.

/*

Question 1:

n = 4

****
****
****
****

n = 3

***
***
***

n = 6 

******
******
******
******
******
******

*/

function pattern(n) {
  // logic for printing the pattern
  //  write a loop to repeat a task for n rows
  for (let row = 1; row <= n; row++) {
    //  Task
    //  the task is to concatenate "*" n times
    let str = "";
    for (let col = 1; col <= n; col += 1) {
      str += "*";
    }

    console.log(str);
  }
}

pattern(3);
