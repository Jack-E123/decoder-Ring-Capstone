// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if(!alphabet){
      return false;
    }
    // your solution code here
    let lowerInput = input.toLowerCase();
    const alph = "abcdefghijklmnopqrstuvwxyz";
    const sub = alphabet.toLowerCase();
    let result = ""
    
    if(sub.length !== 26){
      return false;
    }
    
    for (let i = 0; i < sub.length; i++){
      if (sub.lastIndexOf(sub[i]) !== i){
        return false
      }
    }
    if(encode === true){
      for (let i of lowerInput){
        if (i === " "){
          result += " ";
        } else {
          let encodeInputIndex = alph.indexOf(i);
          result += sub[encodeInputIndex];
        }
      }
    }else{
        for (let j of lowerInput){
            if (j === " ") {
                result += " ";
            } else {
                let decodeInputIndex = sub.indexOf(j);
                result += alph[decodeInputIndex];
            }
        }
    }
    //console.log(result);
    return result;

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
