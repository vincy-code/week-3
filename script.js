// Assignment Code
const characterAmountRange = document.getElementById
('characterAmountRange')

const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElements = document.getElementById('includeUppercase')
const includeNumbersElements = document.getElementById('includeNumbers')
const includeSymbolsElements = document.getElementById('includeSymbols')

const form = document.getElementById('pwdGeneratorForm')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElements.checked
  const includeNumbers = includeNumbersElements.checked
  const includeSymbols = includeSymbolsElements.checked

  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  String.fromCharCode(65)
}

function arrayFomLowToHigh(low, high) {
  
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
