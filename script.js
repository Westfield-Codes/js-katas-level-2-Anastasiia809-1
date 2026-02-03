/* CALCULATOR KATA */

/* This is best done with a JS switch control, though can also be a chain of conditionals. */

/* FUNCTION main() 
 * Perform basic arithmetic as a calculator
 * @param: none (main never gets params)
 * @return: none (main never gets returns)
 */
function main() {
    let operator = prompt("What operation do you want to? (+, -, *, /)");
    let a = prompt("First number?");
    let b = prompt("Second number?");
    parseInt(a);
    parseInt(b);
   switch(operator) {
    case ("+"):
        add(a,b);
        break;
    case ("-"):
        subtract(a,b);
        break;
    case ("*"):
        multiply(a,b);
        break;
    case ("/"):
        divide(a,b);
        break;
    }
   }
    let result = a+b;
    alert("Equation " +a+b + " = " + result);
 // Ask the user what operation they want (+, -, *, /)
 // Ask the user for the first number (a)
 // Parse a as an integer
 // Ask the user for the second number (b)
 // Parse b as an integer
 // Based on the operation, send the numbers to the right function as arguments 
 // store the returned value in variable called result
 // Alert the equation a + operation + b = result

/* FUNCTION add(a,b)
 * define a function called add with two number parameters a and b
 * @param: a, b (integers)
 * @return: a + b
 */
function add(a,b) {
    return a + b;
}
/* FUNCTION subtract(a,b)
 * define a function called subtract with two number parameters a and b
 * @param: a, b (integers)
 * @return: a - b
 */
function subtract(a,b) {
    return a - b;
}
/* FUNCTION multiply(a,b)
 * define a function called multiply with two number parameters a and b
 * @param: a, b (integers)
 * @return: a * b (* means multiply)
 */

/* FUNCTION divide(a,b)
 * define a function called divide with two number parameters a and b
 * @param: a, b (integers)
 * @return: a / b (/ means divided by)
 */
