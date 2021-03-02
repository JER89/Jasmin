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
    return 'Write your method here';
}

let shortestWord = (array) => {
    return 'Write your method here';
}

let longestWord = (array) => {
    return 'Write your method here';
}

let sumNumbers = (array) => {
    return 'Write your method here';
}

let repeatElements = (array) => {
    return 'Write your method here';
}

let stringToNumber = (string) => {
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
