import axios from 'axios';

const api = axios.create({
    // baseURL: "https://pokeapi.co/api/v2",
    baseURL: "https://www.anapioficeandfire.com/api/characters"
})

export default api