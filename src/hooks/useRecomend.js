import { useState, useEffect } from 'react';
import { api } from "../services/api";

export function useRecommend() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await api.get('/movie/recommendations');
                
                const moviePromises = response.data.results.map(async (movie) => {
                    try {
                        const detailsResponse = await api.get(`/movie/${movie.id}`, {
                            params: {
                                append_to_response: 'release_date,runtime,genres',
                            }
                        });

                        const details = detailsResponse.data;

                        const trailerResponse = await api.get(`/movie/${movie.id}/videos`);
                        const trailer = trailerResponse.data.results.find(video => video.type === 'Trailer' && video.iso_639_1 === 'pt');
                        const trailerKey = trailer ? trailer.key : null;

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
                        return { ...movie, trailerKey: null };
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
