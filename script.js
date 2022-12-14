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

//Setting up random number generator to select one character from array
function randomNumber(array) {
  return Math.trunc(Math.random() * array.length);
}

// Set up function to get one random element from an array.
function getRandomChar(arr) {
  let randomCharIndex = randomNumber(arr);
  return arr[randomCharIndex];
}

// Function to prompt user for password options
function getPasswordOptions() {
  // Creating object to store user inputs for later use.
  let userInputs = {
    passwordLength: 0,
    lowerCasedCharacterSelection: false,
    upperCasedCharacterSelection: false,
    numericCharacterSelection: false,
    specialCharacterSelection: false,
  };
  // User inputs password length.  Using parseInt to change numerical input to number type, since prompts give string as default.
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

  // User selects which character types they want to include in their password
  userInputs.lowerCasedCharacterSelection = confirm(
    "Click OK to include lower case characters in your password."
  );
  userInputs.upperCasedCharacterSelection = confirm(
    "Click OK to include upper case characters in your password."
  );
  userInputs.numericCharacterSelection = confirm(
    "Click OK to include numeric characters in your password."
  );
  userInputs.specialCharacterSelection = confirm(
    "Click OK to include special characters in your password."
  );

  // User must select at least one character type
  if (
    userInputs.lowerCasedCharacterSelection === false &&
    userInputs.upperCasedCharacterSelection === false &&
    userInputs.numericCharacterSelection === false &&
    userInputs.specialCharacterSelection === false
  ) {
    alert(
      "You MUST select at least one character type for your password.  Please click the 'generate password' button to try again."
    );
    return false;
  }

  return userInputs;
}

// Function to generate password with user input
function generatePassword() {
  let userInputs = getPasswordOptions();
  if (userInputs === false) return "";
  let passwordComponents = [];
  if (userInputs.lowerCasedCharacterSelection === true) {
    passwordComponents.push(lowerCasedCharacters);
  }
  if (userInputs.upperCasedCharacterSelection === true) {
    passwordComponents.push(upperCasedCharacters);
  }
  if (userInputs.numericCharacterSelection === true) {
    passwordComponents.push(numericCharacters);
  }
  if (userInputs.specialCharacterSelection === true) {
    passwordComponents.push(specialCharacters);
  }

  let password = "";
  let passwordComponentsIndex = 0;
  for (i = 0; i < userInputs.passwordLength; i++) {
    password += getRandomChar(passwordComponents[passwordComponentsIndex]);

    passwordComponentsIndex++;
    if (passwordComponentsIndex == passwordComponents.length) {
      passwordComponentsIndex = 0;
    }
  }
  console.log(password);
  return password;
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
