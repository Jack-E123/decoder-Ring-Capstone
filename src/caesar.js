// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    //if encode is true shift is true;
    //if encode is false shift is opposite;
    //use toUpperCase or toLowerCase;
    //create an alphabet array and create an array out of the input param;
    //for each index of the input array we should find its matching letter
    //in the alphabet array and 'shift' it according to the shift param and encode param;
    //then push that new shifted letter to a return array and finally return that array;

    if (shift === 0 || !shift || shift > 25 || shift < -25) {
      return false;
    }
    if (encode === false) {
      shift = -shift;
    }
    let inputLower = input.toLowerCase();
    let result = [];
    let resultString = "";
    for (let i = 0; i < inputLower.length; i++) {
      if (inputLower.charCodeAt(i) >= 97 && inputLower.charCodeAt(i) <= 122) {
        if (
          inputLower.charCodeAt(i) + shift >= 97 &&
          inputLower.charCodeAt(i) + shift <= 122
        ) {
          result.push(inputLower.charCodeAt(i) + shift);

          resultString += String.fromCharCode(result[result.length - 1]);
        } else if (inputLower.charCodeAt(i) + shift < 97) {
          result.push(inputLower.charCodeAt(i) + 26 + shift);

          resultString += String.fromCharCode(result[result.length - 1]);
        } else if (inputLower.charCodeAt(i) + shift > 122) {
          result.push(inputLower.charCodeAt(i) - 26 + shift);

          resultString += String.fromCharCode(result[result.length - 1]);
        }
      } else {
        result.push(inputLower.charCodeAt(i));

        resultString += String.fromCharCode(result[result.length - 1]);
      }
    }
    return resultString;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
