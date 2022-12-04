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
let passwordArray = [];
let specialCharacterSelection,
  numericCharacterSelection,
  lowerCasedCharacterSelection,
  upperCasedCharacterSelection;

//Setting up random number generator to select one character from array
function randomNumber(array) {
  return Math.trunc(Math.random() * array.length);
}

//Storing random numbers as variables within range(dertermined by array length) of each array.  This will provide a starting position for extracting a character for the password generator.  Tested that random numbers are generating correctly.

// Function to prompt user for password options
function getPasswordOptions() {
  // User defines password length
  let userInputs = {
    passwordLength: 0,
    specialCharacterSelection: false,
    numericCharacterSelection: false,
    lowerCasedCharacterSelection: false,
    upperCasedCharacterSelection: false,
  };

  userInputs.passwordLength = parseInt(
    prompt(
      "Please type how many characters you would like your password to be.\nPasswords MUST be at least 10 characters but no more than 64."
    )
  );

  if (isNaN(userInputs.passwordLength)) {
    alert(
      "You did not enter a number. Please click 'generate password' to try again."
    );
    return false;
  }

  if (userInputs.passwordLength < 10 || userInputs.passwordLength > 64) {
    alert(
      "Your password length needs to be between 10 and 64 characters long. Please click the 'generate password' button to try again"
    );
    return false;
  }

  // Set up user character selection prompts as function which only runs when password length correct
  userInputs.specialCharacterSelection = confirm(
    "Click OK to include special characters in your password."
  );
  userInputs.numericCharacterSelection = confirm(
    "Click OK to include numeric characters in your password."
  );
  userInputs.lowerCasedCharacterSelection = confirm(
    "Click OK to include lower case characters in your password."
  );
  userInputs.upperCasedCharacterSelection = confirm(
    "Click OK to include upper case characters in your password."
  );

  return userInputs;
}

// Set up function to get one random element from an array.
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
  let userInputs = getPasswordOptions();
  console.log(userInputs);
  if (userInputs.specialCharacterSelection === true) {
    passwordArray.push(...specialCharacters);
  }

  if (userInputs.numericCharacterSelection === true) {
    passwordArray.push(...numericCharacters);
  }

  if (userInputs.lowerCasedCharacterSelection === true) {
    passwordArray.push(...lowerCasedCharacters);
  }
  if (userInputs.upperCasedCharacterSelection === true) {
    passwordArray.push(...upperCasedCharacters);
  }

  // console.log(passwordArray);
  // if (passwordArray.length === 0) {
  //   alert(
  //     "You MUST select at least one character type for your password.  Please click the 'generate password' button to try again."
  //   );
  // }

  // User decides which character types to include in password.  Store as Boolean value.  Based on user selection concatenate arrays.  Use random character function within loop to store a character each time.
  let randomCharacter = "";
  let password = "";
  for (i = 0; i < userInputs.passwordLength; i++) {
    randomCharacter = getRandomChar(passwordArray);
    password += randomCharacter;
  }

  console.log(password);
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
