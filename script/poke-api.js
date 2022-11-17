
const pokeApi = {}

pokeApi.getPokemonsDetail = (pokemon) => { //criando um get de pesquisa
    return fetch(pokemon.url) // buscar na "url pokemon"
    .then((response) => response.json()) // resultado da pesquisa retornar como json
}

pokeApi.getPokemons = (offset=1, limit=10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
       return fetch(url)   // se a "url" der serto
            .then((response) => response.json()) //converter pra json e retornar valor
            .then((JsonBody) => JsonBody.results) //pegar resultado e retornar
            .then((detailRequests) => Promise.all(detailRequests)) //espera o final
            .then((pokemonDetails) => pokemonDetails)

}