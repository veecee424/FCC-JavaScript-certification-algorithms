const express = require('express')
const app = express();

//Palindrome checker
function palindrome(str) {
    let filteredStr = str.toLowerCase().match(/[a-z0-9]/ig)
    const newStr = filteredStr.join("")
    const newStrRvs = filteredStr.reverse().join("")

    if(newStr === newStrRvs) {
        return true
    }
    return false
  }
  
  
  
  palindrome("_eye");

//Roman numeral converter
var convertToRoman = function(num) {
    var decimalNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumerals = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
  
    let romanNumeral = "";
    for (let i = 0; i < decimalNum.length; i++) {
        while (decimalNum[i] < num) {
            romanNumeral+= romanNumerals[i]
            num -= decimalNum[i]
        }
    }
    return romanNumeral;
  };
  

 convertToRoman(48);

 //CAESAR CIPHER
 function rot13(str) {
    let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
    let match = str.toUpperCase().match(/./sg)
    const cipher = []
    match.forEach((alphabet) => {
        let thirteenth;
        if (!(/\w/gi).test(alphabet)) {
            thirteenth = alphabet
        } else {
            thirteenth = alphabets[alphabets.indexOf(alphabet) + 13]
        }
        cipher.push(thirteenth)
    });
    return cipher.join("")
  }
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");


  //Telephone validator
function telephoneCheck(str) {
    let numbers = str.match(/\d/g)
    let symbols = str.match(/\W/g)
    let acceptedSyms = ["-", ")", "(", " "]
    if (numbers.length > 11 || numbers.length < 10) {
        return false
    }
    if(str.charAt(0) == "-") {
        return false
    }
    if(str.charAt(0) == "(" && str.charAt(str.length - 1) == ")") {
        return false
    }
    if (numbers.length == 11 && numbers[0] != 1) {
        return false
    }

    if (symbols) {
        if (symbols.includes("(") && !symbols.includes(")")) {
            return false
        }
        if (symbols.includes(")") && !symbols.includes("(")) {
            return false
        }
        for (let i = 0; i < symbols.length; i++) {
            if (acceptedSyms.indexOf(symbols[i]) == -1) {
                return false
            }
        }
        return true
    }
    return true
  }
  
  console.log(telephoneCheck("(555-555-5555"));
  


app.listen(2020, () => {
    console.log('Listening to everything!')
})
