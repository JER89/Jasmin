let selectElementsStartingWithA = (array) => {
    let newArray= [];
    for(let i = 0; i < array.length; i++) {
        if(array[i].charAt(0) === "a") {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let selectElementsStartingWithVowel = (array) => {
    let newArray=[];
    for(let i = 0; i <array.length; i++) {
        if(array[i].charAt(0) === "a" || array[i].charAt(0) === "e" || array[i].charAt(0) === "i" || 
        array[i].charAt(0) === "o" || array[i].charAt(0) === "u" || array[i].charAt(0) === "y") {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let removeNullElements = (array) => {
    
    return array.filter(word => word !== null);
}

let removeNullAndFalseElements = (array) => {
    let newArray = array.filter(word => word !== null);
    return newArray.filter(word => word !== false) ;
}

let reverseWordsInArray = (array) => {
    let reversedWords = [];
    for(let i = 0; i < array.length; i++) {
        let splitArray = array[i].split("");
        let reverseArray = splitArray.reverse("");
        let joinArray = reverseArray.join("");
        reversedWords.push(joinArray);
    }
    return reversedWords;
}

let everyPossiblePair = (array) => {
    let result = [];
    array.sort();
    for(let i = 0; i < array.length; i++) {
        for(let j = i+1; j < array.length; j++) {
            if (array[i] !== array[j]){
                result.push([array[i],array[j]]);
            }
        }
    }
    return result;
    
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element)
    return array;
}

let sortByLastLetter = (array) => {
    return array.sort((a,b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1));
    
}

let getFirstHalf = (string) => {
    return string.substring(0, (Math.round(string.length/2)));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i].charAt(0) === array[i].charAt(array[i].length-1)
        && array[i].charAt(1) === array[i].charAt(array[i].length-2)) {
            count++;
        }
    }
    return count;
}

let shortestWord = (array) => {
    array.sort((a, b) => a.length - b.length)
    return array[0];
}

let longestWord = (array) => {
    array.sort((a, b) => a.length - b.length)
    return array[array.length-1]
}

let sumNumbers = (array) => {
    let sum = 0;
    for (let i =0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
    
}

let repeatElements = (array) => {
    let arr = array;
    array.forEach(p =>arr.push(p))
    return arr;
}

let stringToNumber = (string) => {
    return Number(string);
}

let calculateAverage = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    let newArr = [];
    for (let i = 0; array[i] <= 5; i++) {
         
         newArr.push(array[i]);
        
    } 
    return newArr;
}

let convertArrayToObject = (array) => {
    let object = {};
    for (let i = 0; i< array.length; i+=2) {
        object[array[i]] = array[i+1];
    }
    return object;
    
}

let getAllLetters = (array) => {
   let letters = [];
   for (let i = 0; i < array.length; i++) {
       let word = array[i].split("");
       for (let j = 0; j < word.length; j++) {
           letters.push(word[j]);
       }
   }
  
     return [...new Set(letters.sort())] ;
}
// http://nelsonwells.net/2011/10/swap-object-key-and-values-in-javascript
let swapKeysAndValues = (object) => {
    let newObj = {};
    for(let prop in object) {
        if(object.hasOwnProperty(prop)) {
            newObj[object[prop]] = prop;
        }
    }
    return newObj ;
}

let sumKeysAndValues = (object) => {
    let sum = 0;
    let keys = new Set(Object.keys(object));
    let values = new Set(Object.values(object));
    keys.forEach(n => sum += Number(n));
    values.forEach(n => sum += Number(n));

    return sum;
}

let removeCapitals = (string) => {
    let array = string.split('');
    let newArr = [];
    array.forEach(p => {
        if (p === p.toLowerCase()) {
            newArr.push(p);
        }
    });
    let newString = newArr.join("");
    
    return newString;
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
  
    return `0${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()}`;
}

let getDomainName = (string) => {
    let array = string.split('@')
    let arr2 = array[1].split('.com')
    arr2.pop();

    return arr2.join();
}

let titleize = (string) => {
    let array = string.toLowerCase().split(' ');
    for(let i =0; i < array.length; i++) {
        if(array[i].length > 3 || i == 0 || array[i - 1].indexOf('.') > 0)
        { array[i] = array[i].charAt(0).toUpperCase() + array[i].substring(1).toLowerCase();


        }
    }
    
   
    return array.join(' ');
}

let checkForSpecialCharacters = (string) => {
    let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    return regex.test(string);

}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    let f = 1;
    function factorial(a) {
        if(a===0) {
            return f;
        } else {
            f *= a;
            return factorial(a - 1);
        }
    }
    return factorial(number);
}
//
let findAnagrams = (string) => {
    if(string.length === 1){
    return string;
    }
    for (let i = 0; i < string.length; i++) {

    }

    
    return 'Write your method here';
}

let convertToCelsius = (number) => {
   let result = (number - 32) * (5/9);
   
   return Math.round(result);
}

let letterPosition = (array) => {
    function alphabetPosition(letter) {
        if(letter === letter.toUpperCase()) {
            let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
            return alpha.indexOf(letter)+ 1;
       } else {
            let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
            return alpha.indexOf(letter) + 1;
        }
    }
    let newArr = [];
    array.forEach(letter => {
        newArr.push(alphabetPosition(letter));
    });
   
    return newArr;
   
}
        

