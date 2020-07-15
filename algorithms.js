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


app.listen(2020, () => {
    console.log('Listening to everything!')
})
