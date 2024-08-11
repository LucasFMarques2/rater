import axios from 'axios';

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "163dfeb44132d15e16be542de4cbf259",
        language: 'pt-BR'
    }
});
