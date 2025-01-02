
// Pokemon info display fields
const pokemonName = document.getElementById('pokemon-name')
const pokemonId = document.getElementById('pokemon-id')
const pokemonWeight = document.getElementById('weight')
const pokemonHeight = document.getElementById('height')
const pokemonTypes = document.getElementById('types')
const pokemonHP = document.getElementById('hp')
const pokemonAttack = document.getElementById('attack')
const pokemonDefense = document.getElementById('defense')
const pokemonSpecialAttack = document.getElementById('special-attack')
const pokemonSpecialDefense = document.getElementById('special-defense')
const pokemonSpeed = document.getElementById('speed')

// Input fields
const inputField = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")



// Storage variables

searchButton.addEventListener("click", () => {
    // Request variables
    const fetchRequestUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputField.value}`
    const testRequest = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon`
    const rawData = fetch(fetchRequestUrl)
    .then()
    const pokemonData = rawData.json()
    console.log(inputField.value)
    console.log(fetchRequestUrl)
    console.log(rawData)
    console.log(pokemonData)
})



/*
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
*/
