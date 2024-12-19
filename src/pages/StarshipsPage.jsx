import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../css/StarshipsPage.css";

function StarshipsPage() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await axios.get("https://swapi.py4e.com/api/starships/");
        setStarships(response.data.results);
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };
    fetchStarships();
  }, []);

  return (
    <div className="starships-page">
      <h2>Star Wars Starships</h2>
      <div className="starships-list">
        {starships.map((starship, index) => (
          <div key={index} className="starship-card">
            <h3>{starship.name}</h3>
            <p><strong>Model:</strong> {starship.model}</p>
            <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
            <p><strong>Cost:</strong> {starship.cost_in_credits} credits</p>
            <p><strong>Passengers:</strong> {starship.passengers}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StarshipsPage;
