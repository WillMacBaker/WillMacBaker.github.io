const inputField = document.getElementById('user-input')
const checkPhoneNumberButton = document.getElementById('check-btn')
const clearButton = document.getElementById('clear-btn')
const resultsDividerArea = document.getElementById('results-div')

// This creates a blank p tag entry, that will be used to populate the
// results-div
const pNode = document.createElement("p")
//^(?:1\s*\(?(\d{3})\)?|)(\d{3})(\-|\s+)(\d{4})(\-|\s+)(\d{4})$/;

const phoneNumberRegex = /(\d)/

checkPhoneNumberButton.addEventListener("click", ()=>{
    console.log(inputField.value)
    if(inputField.value === ""){
        alert("Please provide a phone number");
        return;
    }
    else if(inputField.value) {
        console.log(`Adding ${inputField.value} to the regexChecker function`)
        regexChecker(inputField.value)
    }
}, false)


// This function checks if the number value matches the regex rule.
const regexChecker = (valueToCheck) => {
    console.log("RegexChecker function activated!")
    if(phoneNumberRegex.test(valueToCheck)){
        console.log(phoneNumberRegex.test(valueToCheck))
        console.log('Text entered matches regex pattern')
        addElement(true, valueToCheck)
    }
    else if (!phoneNumberRegex.test(valueToCheck)){
        console.log(phoneNumberRegex.test(valueToCheck))
        console.log('Text entered does NOT match regex pattern')
        addElement(false, valueToCheck)
    }
}


const addElement = (flag, inputValue) => {
    const placeholderTextInvalid = `Invalid US number: ${inputValue}`
    const placeholderTextValid = `Valid US number: ${inputValue}`

    if (flag){
        pNode.textContent = placeholderTextValid
        
        resultsDividerArea.appendChild(document.createTextNode(pNode.textContent))//document.createTextNode(placeholderTextValid))
    }
    else if (!flag){
        pNode.textContent = placeholderTextInvalid
        resultsDividerArea.appendChild(document.createTextNode(pNode.textContent))//document.createTextNode(placeholderTextInvalid))
    }
}

clearButton.addEventListener("click", ()=> {
    resultsDividerArea.textContent = '';
}, false)
