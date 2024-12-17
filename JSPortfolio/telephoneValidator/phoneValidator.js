const inputField = document.getElementById('user-input')
const checkPhoneNumberButton = document.getElementById('check-btn')
const clearButton = document.getElementById('clear-btn')
const resultsDividerArea = document.getElementById('results-div')


checkPhoneNumberButton.addEventListener("click", ()=>{
    console.log(inputField.value)
    if(inputField.value === ""){
        alert("Please provide a phone number");
        return;
    }
    else {
        // RUN MAIN CHECKING CODE HERE, THIS IS WHERE MEAT OF FUNCTION OCCURS.
    }
}, false)

clearButton.addEventListener("click", ()=> {
    console.log("Clear button hit")
    resultsDividerArea.value == ""
}, false)


// https://codepen.io/misou/pen/VwKKwjL