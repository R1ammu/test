const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log(x);
}

console.log(x);
