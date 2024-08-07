function reveresString(userInput) {
    
    let split = userInput.split('');
    
    split.reverse();

    let reversedStr = split.join('');

    return reversedStr;

    
}

// removeFromArray

// const array = [1, 2, 3, 4]

// function removeFromArray(input) {
//     const newarr = array.push(input);

//     return array;

// }


const array = [1, 2, 3, 4];

function removeFromArray(input) {
    // Add the input to the array
    array.push(input);
    
    // Create a new array that is a copy of the modified array
    const newarr = [...array]; // or Array.from(array)
    
    // Return the new array
    return newarr;
}

console.log(removeFromArray('something'));

