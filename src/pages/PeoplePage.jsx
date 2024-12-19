import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../css/PeoplePage.css";

function PeoplePage() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get("https://swapi.py4e.com/api/people/");
        setPeople(response.data.results);
      } catch (error) {
        console.error("Error fetching people:", error);
      }
    };
    fetchPeople();
  }, []);

  return (
    <div className="people-page">
      <h2>Star Wars Characters</h2>
      <div className="people-list">
        {people.map((person, index) => (
          <div key={index} className="person-card">
            <h3>{person.name}</h3>
            <p><strong>Height:</strong> {person.height} cm</p>
            <p><strong>Mass:</strong> {person.mass} kg</p>
            <p><strong>Gender:</strong> {person.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PeoplePage;
