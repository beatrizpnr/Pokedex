async function fetchData(pokeNumber){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeNumber)
    const pokemon = await response.json();
    console.log({ pokemon });
    return pokemon
}

let grass = '#74CB48';
let poison = '#A43E9E';
let bug = '#A7B723';
let dragon = '#F5FFC6';
let electric = '#F9CF30';
let fairy = '#B899FF';
let fighting = '#C9A97E';
let fire = '#F57D31';
let flying = '#A891EC';
let ghost = '#70559B';  
let ground = '#906D3C';
let ice = '#CCDAD1';
let normal = '#AAA67F';
let psychic = '#FB5584';
let rock = '#B69E31';
let steel = '#B7B9D0';
let water = '#6493EB';


async function createPokemon(pokeNumber){

    const pokemon = await fetchData(pokeNumber);
    const pokeName = document.createElement("h2"); 
    const img = document.createElement("img"); 
    const pokeID = document.createElement("h3");
    const landingPage = document.getElementById("mainPage");   
    const pokeBox = document.getElementById("pokeBox");
    const poke = document.createElement("div");
    const pokeNameDiv = document.createElement("div");
    poke.setAttribute("id", "pokemon");
    pokeNameDiv.setAttribute("id", "pokeNameDiv");
    const button = document.createElement('button');


    let poketype = pokemon.types[0]["type"];
  

    switch(poketype.name){
        case 'grass':
            poke.style.borderColor = grass;
            pokeName.style.backgroundColor = grass;
            pokeID.style.color = grass;
            break;
        
        case 'poison':
            poke.style.borderColor = poison;
            pokeName.style.backgroundColor = poison;
            pokeID.style.color = poison;
            break; 

        case 'bug':
            poke.style.borderColor = bug;
            pokeName.style.backgroundColor = bug;
            pokeID.style.color = bug;
            break;

        case 'dragon':
            poke.style.borderColor = dragon;
            pokeName.style.backgroundColor =dragon;
            pokeID.style.color = dragon;
            break;

        case 'fairy':
            poke.style.borderColor = fairy;
            pokeName.style.backgroundColor = fairy;
            pokeID.style.color = fairy;
            break;
        
        case 'fighting':
            poke.style.borderColor = fighting;
            pokeName.style.backgroundColor = fighting;
            pokeID.style.color = fighting;
            break;

        case 'fire':
            poke.style.borderColor = fire;
            pokeName.style.backgroundColor = fire;
            pokeID.style.color = fire;
            break;

        case 'flying':
            poke.style.borderColor = flying;
            pokeName.style.backgroundColor = flying;
            pokeID.style.color = flying;
            break;

        case 'ghost':
            poke.style.borderColor = ghost;
            pokeName.style.backgroundColor = ghost;
            pokeID.style.color = ghost;
            break;

        case 'ground':
            poke.style.borderColor = ground;
            pokeName.style.backgroundColor = ground;
            pokeID.style.color = ground;
            break;

        case 'ice':
            poke.style.borderColor = ice;
            pokeName.style.backgroundColor = ice;
            pokeID.style.color = ice;
            break;

        case 'normal':
            poke.style.borderColor = normal;
            pokeName.style.backgroundColor = normal;
            pokeID.style.color = normal;
            break;

        case 'psychic':
            poke.style.borderColor = psychic;
            pokeName.style.backgroundColor = psychic;
            pokeID.style.color = psychic;
            break;

        case 'rock':
            poke.style.borderColor = rock;
            pokeName.style.backgroundColor = rock;
            pokeID.style.color = rock;
            break;

        case 'steel':
            poke.style.borderColor = steel;
            pokeName.style.backgroundColor = steel;
            pokeID.style.color = steel;
            break;

        case 'water':
            poke.style.borderColor = water;
            pokeName.style.backgroundColor = water;
            pokeID.style.color = water;
            break;

        case 'electric':
            poke.style.borderColor = electric;
            pokeName.style.backgroundColor = electric;
            pokeID.style.color = electric;
            break;

    }

    pokeName.textContent = pokemon.name;
    pokeID.textContent = `#${pokemon.id}`;
    img.src = pokemon.sprites.front_default;

    button.appendChild(img);
    poke.appendChild(pokeID);
    poke.appendChild(button);   
    pokeNameDiv.appendChild(pokeName);
    poke.appendChild(pokeNameDiv);   
    pokeBox.appendChild(poke);
    landingPage.appendChild(pokeBox);

    button.addEventListener('click', function(){             
        location = "./pokeind.html";
        number = `${pokemon.id}`;
        location.assign("./pokeind.html#" + number);

    });

}

var pokeNumbers;

const maxNumbers = 151;
let list = [];
let randomNumber;
let tmp;

for (let i = 0; i < maxNumbers; i++) {
list[i] = i + 1;
}
for (let i = list.length; i;) {
    randomNumber = Math.random() * i-- | 0;
    tmp = list[randomNumber];
    list[randomNumber] = list[i];
    list[i] = tmp;
}
list.length = 9;
pokeNumbers = list;


pokeNumbers.forEach(createPokemon);

function order() {
    let pokeNum = "";
    pokeNum = pokeNumbers.sort((a,b) => a-b); 
    console.log(pokeNum);
    document.getElementById("pokeBox").innerHTML = pokeNum.forEach(createPokemon);

    
}

const listname = [];
async function search_pokemon() {
    for(var i =0; i < 1; i++){
    const pokename = createPokemon(pokeNumbers[i]);  
    listname.push(pokename);   
    }
    console.log(listname);
    let input = document.getElementById("Procurar").value;
    input = input.toLowerCase(); 
    let x = listname; 
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            document.getElementById("pokeBox").innerHTML = createPokemon(listname[i]);
        }
    }
    
 }

