import { useState, useEffect } from 'react';
import { api } from "../services/api";

export function useNewMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await api.get('/discover/movie');
                
                const moviePromises = response.data.results.map(async (movie) => {
                    try {
                        // Fetch movie details
                        const detailsResponse = await api.get(`/movie/${movie.id}`, {
                            params: {
                                append_to_response: 'release_date,runtime,genres',
                            }
                        });

                        const details = detailsResponse.data;

                        // Fetch movie trailer in Portuguese
                        const trailerResponse = await api.get(`/movie/${movie.id}/videos`);
                        const trailer = trailerResponse.data.results.find(video => video.type === 'Trailer' && video.iso_639_1 === 'pt');
                        const trailerKey = trailer ? trailer.key : null;

                        // Merge movie data with details and trailer key
                        return {
                            ...movie,
                            runtime: details.runtime || 0,
                            genres: details.genres || [],
                            release_date: details.release_date || '',
                            vote_count: details.vote_count || 0,
                            trailerKey: trailerKey,
                        };
                    } catch (error) {
                        console.error(`Erro ao buscar detalhes ou trailer para o filme ${movie.id}:`, error);
                        return { ...movie, trailerKey: null }; // Handle errors gracefully
                    }
                });

                const moviesWithDetailsAndTrailers = await Promise.all(moviePromises);
                setMovies(moviesWithDetailsAndTrailers);
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
            }
        }

        fetchMovies();
    }, []);

    return movies;
}
