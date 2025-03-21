const capitalizeWords = (words) => {
    return iterateAndDo(capitalizeAll, words);
};

const iterateAndDo = (action, array) => {
    let output = [];
    for (var i = 0; i < array.length; i++) {
        output.push(action(array[i]));
    }
    return output;
};

const capitalizeAll = (str) => {
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
};



const example = ['car', 'utility', 'juice'];
//iterateAndDo(console.log, example);
console.log(capitalizeWords(example));