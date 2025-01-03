
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

// Page div that will be targeted to clear all children elements
const shownPokemonContent = document.getElementById('page-contents')

// Array that will store received pokemon data
let pokemonDataArray = [];

// Parses input entered into pokemon search box, and returns a url with the 
// pokemon string parsed and appended, or the pokemon number id appended to end of url
// query to freecodecamp pokemon api endpoint
const parseInput = () => {
    const stringAndIntregex = /^(?=.*[0-9])(?=.*[A-Za-z])[A-Za-z0-9]+$/;
    
    // Test functions to check type of entered value.
    const stringAndIntTest = (string) => {
        return stringAndIntregex.test(string)
    }
    
    const hasNumber = (string) => {
        return /\d/.test(string)
    }

    // If entry value contains both string and int, and is likely 
    // to break request, don't process further, and throw out alert
    if (stringAndIntTest(inputField.value) === true){
        console.log(inputField.value + "contains string and int values!")
        alert("Please enter either the pokemon id OR the name, not both")
        return false
    }

    // If entered value is just a string, begin parsing out values, dash-separate, parse
    // gender symbols
    else if (hasNumber(inputField.value) === false ){
        // treat entry as string and parse accordingly
        console.log("input is of type integer?: " + hasNumber(inputField.value))
        // parse and clean string, respectively


        return `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputField.value}`
    }
    // If entered value is just an integer, simply append to end of url, return to be parsed
    else if (hasNumber(inputField.value) === true){
        console.log("input is of type integer?: " + hasNumber(inputField.value))
        return `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputField.value}`
        
    }
    
}

// Storage variables

searchButton.addEventListener("click", () => {
    // Request variables

    if (inputField.value === ""){
        console.log("Blank entry")
    }
    else {
        const fetchRequestUrl = parseInput()
        if (fetchRequestUrl === false){
            console.log("Multi-type entry detected, aborting url request...")
        }
        else {
            // Make request to endpoint, await reponse, return data in json format...
            function getpokemondata(url){
                fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    //Updating page and doing things needs to happen here.
                    pokemonDataArray = data;
                    console.log("pokemonData array is: ", pokemonDataArray)
                    updatePage(pokemonDataArray)
            })
                .catch((err) => {
                    console.error(`There was an error: ${err}`)
                });
            }
            // Function that updates page elements based upon received json data back.
            const updatePage = (pokemon) => {
                
            //Clear all elements from page first, before repopulating
            //shownPokemonContent.empty()

            // Update page elements
            pokemonName.innerHTML =   `<p>Pokemon Name: ${pokemon.name}</p>`
            pokemonId.innerHTML =     `<p>ID: ${pokemon.id}</p>`
            pokemonWeight.innerHTML = `<p>Weight: ${pokemon.weight}</p>`
            pokemonHeight.innerHTML = `<p>Height: ${pokemon.height}</p>`
            
            const {hp, attack, defense, 'special-attack': specialAttack, 'special-defense': specialDefense 
            , speed} = pokemon.stats

            pokemonHP.innerHTML = `<p>HP: ${pokemon.stats[0].base_stat}</p>`;
            pokemonAttack.innerHTML = `<p>Attack: ${pokemon.stats[1].base_stat}</p>`;
            pokemonDefense.innerHTML = `<p>Defense: ${pokemon.stats[2].base_stat}</p>`;;
            pokemonSpecialAttack.innerHTML = `<p>Sp. Attack: ${pokemon.stats[3].base_stat}</p>`;;
            pokemonSpecialDefense.innerHTML = `<p>Sp. Defense: ${pokemon.stats[4].base_stat}</p>`;;
            pokemonSpeed.innerHTML = `<p>Speed: ${pokemon.stats[5].base_stat}</p>`;;

            let typesText = [];
            pokemon.types.forEach(element => {
                typesText += element.type.name
            });
            ;
            }
            getpokemondata(fetchRequestUrl)
        }
    }
})