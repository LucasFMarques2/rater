// useActors.js
import { useState, useEffect } from 'react';
import { api } from "../services/api";

export function useActors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchActors() {
      try {
        const response = await api.get('/person/popular');
        const actorsWithAge = response.data.results.map(actor => {
          const age = actor.birthday ? calculateAge(actor.birthday) : null;
          return { ...actor, age };
        });
        setActors(actorsWithAge);
      } catch (error) {
        console.error("Erro ao buscar celebridades:", error);
      }
    }

    fetchActors();
  }, []);

  return actors;

  function calculateAge(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
}
