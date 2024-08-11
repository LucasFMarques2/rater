import { useState, useEffect } from 'react';
import { api } from "../services/api";

export function useNewMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await api.get('/discover/movie');
                setMovies(response.data.results); 
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
            }
        }
        fetchMovies();
    }, []); 
    return movies;
}
