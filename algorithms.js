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


app.listen(2020, () => {
    console.log('Listening to everything!')
})
