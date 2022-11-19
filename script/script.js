const pokemonList = document.getElementById('pokemonList') //para importar do HTML oq eu quero adicionar
const pokebola = document.getElementsByClassName('pokebola')[0]
const limit = 5;
let offset = 1;





// função para mostrar oq eu quero converter e retornar
function loadPokemons(offset, limit ) {    
       pokeApi.getPokemons( offset, limit).then((pokemons = []) =>{     //agora fazendo a introdução dos elementos/ paginação
            const newHtml = pokemons.map((pokemon) =>   
            `<li class="card ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="imagens">
                <ol class="types">
                ${pokemon.types.map((type) =>`<li class="type">${type}</li>`).join('')} 
                
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                </li>
                
                `
            ).join('')
        pokemonList.innerHTML += newHtml // linca o html (pokemons.map) mapear o conteudo "join('')" cria um novo arquivo
    })
   
}

loadPokemons(offset, limit)

pokebola.addEventListener('click', () => {
    offset += limit
    loadPokemons(offset, limit)
  
})