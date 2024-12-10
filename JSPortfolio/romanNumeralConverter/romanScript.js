const numberInput = document.getElementById("number")
const convertButton = document.getElementById("convert-btn")
const convertedOutput = document.getElementById("output")

const parsedInt = document.getElementById("number").value

const numeralArray = [
  {
    romanNumeral: "M",
    arabicNumeral: 1000
  },
  {
    romanNumeral: "CM",
    arabicNumeral: 900
  },
  {
    romanNumeral: "D",
    arabicNumeral: 500
  },
  {
    romanNumeral: "CD",
    arabicNumeral: 400
  },
  {
    romanNumeral: "C",
    arabicNumeral: 100
  },
  {
    romanNumeral: "XC",
    arabicNumeral: 90
  },
  {
    romanNumeral: "L",
    arabicNumeral: 50
  },
  {
    romanNumeral: "XL",
    arabicNumeral: 40
  },
  {
    romanNumeral: "X",
    arabicNumeral: 10
  },
  {
    romanNumeral: "IX",
    arabicNumeral: 9
  },
  {
    romanNumeral: "V",
    arabicNumeral: 5
  },
  {
    romanNumeral: "IV",
    arabicNumeral: 4
  },
  {
    romanNumeral: "I",
    arabicNumeral: 1
  },

]

const convertToNumeral = (inputInteger) => {
  let result = '';
  numeralArray.sort((a,b) => b.arabicNumeral - a.arabicNumeral);

  for (let i = 0; numeralArray.length; i++){
    while(numeralArray[i].arabicNumeral <= inputInteger){
      console.log("inputInteger before calc ", inputInteger)
      result += numeralArray[i].romanNumeral;
      inputInteger -= numeralArray[i].arabicNumeral
      console.log("inputInteger after calc ", inputInteger)
      console.log("result is now ", result)
      if (inputInteger == 0){
        return convertedOutput.innerHTML = result
      }
    }
  }
}


convertButton.addEventListener("click", (parsedInt) =>{
  if (numberInput.value == ""){
    convertedOutput.innerHTML = "Please enter a valid number."
  } else if (numberInput.value <= 0){
    convertedOutput.innerHTML = "Please enter a number greater than or equal to 1"
    
  } else if (numberInput.value >= 4000){
    convertedOutput.innerHTML = "Please enter a number less than or equal to 3999"
  } else {
    convertToNumeral(numberInput.value)
  }
})