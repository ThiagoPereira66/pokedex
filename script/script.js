

// função para mostrar oq eu quero converter e retornar
function convertPokemonToLi(pokemon){
   return `<li class="card">
                <span class="number">${pokemon.namber}</span>
                <span class="name">${pokemon.name}</span>
                <div class="imagens">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="./img/${pokemon.name}.png" alt="${pokemon.name}">
                </div>
            </li>
    
    `
}

const pokemonList = document.getElementById('pokemonList') //para importar do HTML oq eu quero adicionar


pokeApi.getPokemons().then((pokemons = []) =>{     //agora fazendo a introdução dos elementos
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('') // linca o html (pokemons.map) mapear o conteudo "join('')" cria um novo arquivo
})
  

    


