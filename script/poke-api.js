
const pokeApi = {}

function convertPokeapiDetaoilToPokemons(pokeDetail){
    const pokemon = new pokemons()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type    
    
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    return pokemon
}



pokeApi.getPokemonsDetail = (pokemon) => { //criando um get de pesquisa
    return fetch(pokemon.url) // buscar na "url pokemon"
    .then((response) => response.json()) // resultado da pesquisa retornar como json
    .then( convertPokeapiDetaoilToPokemons)
}

pokeApi.getPokemons = (offset=1, limit=10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
       return fetch(url)   // se a "url" der serto
            .then((response) => response.json()) //converter pra json e retornar valor
            .then((JsonBody) => JsonBody.results) //pegar resultado e retornar
            .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
            .then((detailRequests) => Promise.all(detailRequests)) //espera o final
            .then((pokemonDetail) => pokemonDetail)
          

}

