// Global Variables 
var numbers = [1,2,3,4,5,6,7,8,9,]
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v","w","x","y","z"]; 
var Upperletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U","V","W","X","Y","Z"]; 
var Special = "!@#$%^&*()_±=[]{}|;':,./<>?`-~";
var SpecialArray = Special.split(""); 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function RandomIndex(arr = []) {
  var Index = arr[Math.floor(Math.random() * arr.length)];
  return Index;
}
// Prompts
function passwordPrompts() {
  var lengthPrompt = window.prompt("How long would you like this password to be between 8 and 128?");
  var hasNumbers = window.confirm("Would you like to include Numbers?");
  var hasLowerCase = window.confirm("Would you like to have Lowercase Letters?");
  var hasUpperCase = window.confirm("Would you like to have Uppercase Letters?");
  var hasSpecial = window.confirm("Would you like to have Special Characters?");
  var parsedLength = Number.parseInt(lengthPrompt);

// Validations 
if (Number.isNaN(parsedLength) || (parsedLength < 8 || parsedLength > 128)) {
window.alert("Invalid Entry, password length must be a number greater than 8 and less than 128");
return null
}

if (!hasNumbers && !hasLowerCase && !hasUpperCase && !hasSpecial) {
 window.alert("Please answer yes to at least 1 selection to generate your password");
  return null; 
  }

return {
  lengthPrompt,
  hasNumbers,
  hasLowerCase,
  hasUpperCase,
  hasSpecial,
}
}

function generatePassword(){ 
  var result = [] 
  var chars = []
  var prompts = passwordPrompts() 
  if (prompts.hasLowerCase) {
    // Validations
    chars = chars.concat(lowerLetters)
  }
  if (prompts.hasUpperCase) {
    chars = chars.concat(Upperletter) 
  }
  if (prompts.hasNumbers) {
    chars = chars.concat(numbers)
  }
  if (prompts.hasSpecial) {
    chars = chars.concat(SpecialArray)
  }
  for (let i = 0; i < prompts.lengthPrompt; i++) {
    const element = RandomIndex(chars);
    result.push(element)
    }
    /* 4. display Password to the page */ 
    return result.join("");
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
