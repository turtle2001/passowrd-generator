// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //initial prompt value stored in numChar
  var numChar = prompt("How many characters would you like your password to contain?");

  //if cancel is pressed end sequence
  if (numChar == undefined)
    return;

  //if value does not meet parameters, repeatedly asks for new value 
  while (((numChar < 8) || (numChar > 128)) && numChar != undefined) {
    alert("Password must be between 8 and 128 characters");
    numChar = prompt("How many characters would you like your password to contain?");
    if (numChar == undefined)
      return;
  }

  //asks for inclusion of each character type
  var symbols = confirm("Click OK to confirm inclusion of special caracters.");
  var number = confirm("Click OK to confirm inclusion of numeric characters.");
  var lower = confirm("Click OK to confirm inclusion of lowercase characters.");
  var upper = confirm("Click OK to confirm inclusion of uppercase characters.");

  //if no characters are selected dispalys message
  if (!symbols && !number && !lower && !upper)
    alert("Must select at least one character type.")

  //generates passowrd
  var password = generatePassword(numChar, symbols, number, lower, upper);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(numChar, symbols, number, lower, upper) {
  //makes string of allowed characters
  var allowedChars = "";

  //stores password
  var pw = "";

  //adds characters to string if they were included
  if (symbols)
    allowedChars += " !\"#$ %& '()*+,-./:;<=>?@[\]^_`{|}~";
  if (number)
    allowedChars += "0123456789";
  if (lower)
    allowedChars += "abcdefghijklmnopqrstuvwxyz";
  if (upper)
    allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //chooses random character for  each index of pw
  for (i = 0; i < numChar; i++)
    pw += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));

  return pw;
}