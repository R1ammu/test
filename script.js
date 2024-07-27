function add7(number) {
  return number + 7;
}
console.log(add7(3))


function multiply(a, b) {
  return a * b ;
}
console.log(multiply(3, 8))


function capitalize(str) {
  if (str.length === 0) {
    return str; // Return the string as is if it is empty
  }
  
  // Convert the first character to uppercase and the rest to lowercase
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Example usage
console.log(capitalize("hello"));     // Output: "Hello"
console.log(capitalize("HELLO"));     // Output: "Hello"
console.log(capitalize("hELLO"));     // Output: "Hello"
console.log(capitalize("HeLLo"));     // Output: "Hello"
console.log(capitalize(""));          // Output: ""
console.log(capitalize("a"));         // Output: "A"
console.log(capitalize("A"));         // Output: "A"


function lastLetter() {

}