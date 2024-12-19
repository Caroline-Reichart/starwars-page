import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../css/FilmsPage.css";

function FilmsPage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get("https://swapi.py4e.com/api/films/");
        setFilms(response.data.results);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };
    fetchFilms();
  }, []);

  return (
    <div className="films-page">
      <h2>Star Wars Films</h2>
      <div className="films-list">
        {films.map((film, index) => (
          <div key={index} className="film-card">
            <h3>{film.title}</h3>
            <p><strong>Episode:</strong> {film.episode_id}</p>
            <p><strong>Director:</strong> {film.director}</p>
            <p><strong>Release Date:</strong> {film.release_date}</p>
            <p><strong>Opening Crawl:</strong> {film.opening_crawl.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmsPage;
