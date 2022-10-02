// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatebtn(length) {
    let password = '';
    const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbol = "~!@#$%^&*()_+=|";
    
    let passwordlength = length

    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    

    
}

generatebtn(8);
// Add event listener to generate button
generateBtn.addEventListener("click", generateBtn.addEventListener, );
	