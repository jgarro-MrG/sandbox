var string = "The red fox";

function capitalizeAll(str) {
  var output = "";
  for(var i = 0; i < str.length; i++) {
    if (i === 0) {
      output += str[i].toUpperCase();
    } else {
      if (str[i - 1] === " ") {
        output += str[i].toUpperCase();
      } else {
        output += str[i]
      }
    }  
  }
  return output;
}

console.log(capitalizeAll(string));
