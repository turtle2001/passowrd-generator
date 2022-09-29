// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var numChar = prompt("How many characters would you like your password to contain?");
  while ((numChar < 8 || numChar > 100) && numChar != undefined) {
    alert("Password must be between 8 and 100 characters");
    numChar = prompt("How many characters would you like your password to contain?");
  }

  var symbols = confirm("Click OK to confirm inclusion of special caracters.");
  var number = confirm("Click OK to confirm inclusion of numeric characters.");
  var lower = confirm("Click OK to confirm inclusion of lowercase characters.");
  var upper = confirm("Click OK to confirm inclusion of uppercase characters.");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  console.log("reach");
}