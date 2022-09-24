async function fetchData(pokeNumber) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
    const pokemon = await response.json();
    return pokemon;
}

async function getPokemons() {
    let pokemons = [];
    for (var i = 1; i <= 150; i++) {
        const pokemon = await fetchData(i);
        pokemons.push(pokemon);
    }
    pokemons.forEach(createPokemon)
}

async function createPokemon(pokemon) {
    const container = document.getElementById("container");


    const div = document.createElement("div");
    div.className = `card ${pokemon.types[0].type.name}`;
    
    const h2Number = document.createElement("h2");
    h2Number.textContent = `#${String(pokemon.id).padStart(3, '0')}`;

    const sectionName = document.createElement("section");
    sectionName.className = "section-name";

    const h2Name = document.createElement("h2");
    h2Name.textContent = `${pokemon.name}`
    h2Name.className = "name"

    sectionName.appendChild(h2Name);

    const img = document.createElement("img");
    img.alt = `${pokemon.name}-image`;
    img.src = pokemon.sprites.other['official-artwork'].front_default;

    div.appendChild(h2Number);
    div.appendChild(img);
    div.appendChild(sectionName);

    container.appendChild(div);
}

getPokemons();