//Use series of prompts to check which characters user wants

//Create prompt for password length

//Use conditionals password for min 8 no more than 128 length

//Validate user input for selection of at least one character type

//Write function to generate password

//Generate password




var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "/", ":", ";", "<", "=", ">", "?", "@",];



function generatePassword() {
  //get user inputs for prompts
  var wantUpperCase = prompt("Do you want to include uppercase letters?");
  var wantLowerCase = prompt("Do you want to include lowercase letters?");
  var wantNumbers = prompt("Do you want to include numbers?");
  var wantSpecChar = prompt("Do you want to include special characters?");

  //create if statements that check which character to be included and limit length of  password
  var pwLength = parseInt(prompt("Choose a password length between 8 and 128"));
 
  //use method or function that randomly selects characters from specific arrays
  //collect randomly generated selections from each array
  //create var to store random password
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
