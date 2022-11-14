

// função para mostrar oq eu quero converter e retornar
function convertPokemonToLi(pokemon){
   return `<li class="card">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="imagens">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="./img/bulbasaur-logo-8A27924C02-seeklogo.com.png" alt="${pokemon.name}">
                </div>
            </li>
    
    `
}

const pokemonLt = document.getElementById('pokemonList') //para importar do HTML oq eu quero adicionar


pokeApi.getPokemons().then((pokemonsList) =>{     //agora fazendo a introdução dos elementos
                
       for (let i = 0; i < pokemonsList.length; i++) {
          const pokemon = pokemonsList[i];
          pokemonLt.innerHTML += convertPokemonToLi(pokemon) //linkando o HTML e aplicando mais elementos
            
       }

    })

    


