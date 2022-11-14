
const pokeApi = {}

pokeApi.getPokemons = (offset=0, limit=10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
       return fetch(url)   // se a "url" der serto
            .then((response) => response.json()) //converter pra json e retornar valor
            .then((JsonBody) => JsonBody.results) //pegar resultado e retornar
            .catch((error) => console.error(error))
}