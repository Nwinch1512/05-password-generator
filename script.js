// Notes on assignment requirements
// R1. Generate a password when the button is clicked
// NW.  Set up btn in html.  Bring into JS.  Add event listener that triggers password generator function.
// R2. Present a series of prompts for password criteria
// NW.  Set up prompts for user and store as variables in JS.  User to select length of password.
// R3. Length of password:
//  At least 10 characters but no more than 64.
//NW. (length >= 10 && length <= 64)
// R4. Character types:
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)
// R5. Code should validate for each input and at least one character type should be selected
// NW. Set up password generator function.  This will select characters from each array.  This will take in length as a parameter.  Four arrays will be passed into the function as parameters (one for each character type).  Could use the same function and call by passing different arrays into it.  Need to split user defined length between four arrays to ensure equal number of characters selected from each.  Include scale variable to translate user length into the number of elements needed from each array. Function will output password as a variable.
// R6. Once prompts are answered then the password should be generated and displayed in an alert or written to the page
// Store password as a variable.  Display password in alert window.

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Storing array lengths as variables to determine parameters of random number generator.  Maybe remove later to make code more efficient.
let specialCharactersLength = specialCharacters.length;
let numericCharactersLength = numericCharacters.length;
let lowerCasedCharactersLength = lowerCasedCharacters.length;
let upperCasedCharactersLength = upperCasedCharacters.length;

//Setting up random number generator to select one character from array
function randomNumber(array) {
  return Math.trunc(Math.random() * array.length);
}

//Storing random numbers as variables within range(dertermined by array length) of each array.  This will provide a starting position for extracting a character for the password generator.  Tested that random numbers are generating correctly.

// Function to prompt user for password options
function getPasswordOptions() {}

// Set up function to get one random element from an array.  Need to adjust how many iterations loop makes based on user defined length later.
function getRandomChar(arr) {
  let randomCharIndex = randomNumber(arr);
  return arr[randomCharIndex];
}

//Calling random number function with each array, extracting character from each and storing as a variable.
let char1 = getRandomChar(specialCharacters);
let char2 = getRandomChar(numericCharacters);
let char3 = getRandomChar(lowerCasedCharacters);
let char4 = getRandomChar(upperCasedCharacters);

console.log(char1 + char2 + char3 + char4);

// Function to generate password with user input
//Setting up password prompt.  Need to add btn event listener.

function generatePassword() {
  // User defines password length
  let passwordArray = [];
  let passwordLength = prompt(
    "Please type how many characters you would like your password to be.  \nPasswords MUST be at least 10 characters but no more than 64.",
    10
  );
  if (passwordLength < 10 || passwordLength > 64 || passwordLength === null) {
    passwordLength = 10;
    alert(
      "Your password length needs to be between 10 and 64 characters long. We have set your password to 10 characters as a default.  If you would like this to be longer, please click the 'generate password' button to try again"
    );
  }
  // Set up user character selection prompts as function which only runs when password length correct
  let specialCharacterSelection = prompt(
    "Would you like to include special characters in your selection?\nPlease enter 'yes' or 'no'."
  );
  let numericCharacterSelection = prompt(
    "Would you like to include numeric characters in your selection?\nPlease enter 'yes' or 'no'."
  );
  let lowerCasedCharacterSelection = prompt(
    "Would you like to include lower case characters in your selection?\nPlease enter 'yes' or 'no'."
  );
  let upperCasedCharacterSelection = prompt(
    "Would you like to include upper case characters in your selection?\nPlease enter 'yes' or 'no'."
  );
  //Include function to format character selection.  Change all to lower case.
  // if (
  //   specialCharacterSelection !== "yes" &&
  //   (numericCharacterSelection === "no" ||
  //     numericCharacterSelection === null) &&
  //   (lowerCasedCharacterSelection === "no" ||
  //     lowerCasedCharacterSelection === null) &&
  //   (upperCasedCharacterSelection === "no" ||
  //     upperCasedCharacterSelection === null)
  // ) {
  //   alert(
  //     "You MUST select at least one character type for your password.  Please click the 'generate password' button to try again."
  //   );
  // }

  if (specialCharacterSelection === "yes") {
    passwordArray.push(...specialCharacters);
  }

  if (numericCharacterSelection === "yes") {
    passwordArray.push(...numericCharacters);
  }

  if (lowerCasedCharacterSelection === "yes") {
    passwordArray.push(...lowerCasedCharacters);
  }
  if (upperCasedCharacterSelection === "yes") {
    passwordArray.push(...upperCasedCharacters);
  }

  console.log(passwordArray);
  if (passwordArray.length === 0) {
    alert(
      "You MUST select at least one character type for your password.  Please click the 'generate password' button to try again."
    );
  }

  // Check user password length valid.  This will then define how long we loop over array. If invalid throw error alert.

  // User decides which character types to include in password.  Store as Boolean value.  Based on user selection concatenate arrays.  Use random character function within loop to store a character each time.
  for (let i = 0; i < password.Array.length; i++) {
    let char = getRandomChar(passwordArray);
  }
  console.log(passwordLength);
  console.log(specialCharacterSelection);
  console.log(numericCharacterSelection);
  console.log(lowerCasedCharacterSelection);
  console.log(upperCasedCharacterSelection);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
