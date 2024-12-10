const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn')
const resultOutput = document.getElementById('result')

let outputText = resultOutput.textContent;
outputText = '';

function palindromeCheck(text){
  console.log(text)
  if (text == ''){
    alert("Please input a value")
  } else {
const regex = /[\W_]/g;
  const inputCleaned = text.toLowerCase().replace(regex, "");
  const reverseStr = inputCleaned.split('').reverse().join('')

  if (reverseStr === inputCleaned){
    resultOutput.textContent = `${text} is a palindrome.`
  } else {
    resultOutput.textContent = `${text} is not a palindrome.`
    }
  } 
}


checkButton.addEventListener("click", function () {
palindromeCheck(textInput.value);
})