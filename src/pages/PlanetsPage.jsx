import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../css/PlanetsPage.css";

function PlanetsPage() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get("https://swapi.py4e.com/api/planets/");
        setPlanets(response.data.results);
      } catch (error) {
        console.error("Error fetching planets:", error);
      }
    };
    fetchPlanets();
  }, []);

  return (
    <div className="planets-page">
      <h2>Star Wars Planets</h2>
      <div className="planets-list">
        {planets.map((planet, index) => (
          <div key={index} className="planet-card">
            <h3>{planet.name}</h3>
            <p><strong>Climate:</strong> {planet.climate}</p>
            <p><strong>Terrain:</strong> {planet.terrain}</p>
            <p><strong>Population:</strong> {planet.population}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanetsPage;

