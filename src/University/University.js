import React, { useEffect, useState } from "react";
import axios from "axios";
import "./University.css";

const University = () => {
  const [university, setUniversity] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:44366/Api/University/UniversitiesList", {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    })
      .then(response => {
        setUniversity(response.data.university);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
  <h1 class="title">Universities List</h1>
  <div className="col-lg-9 list">
  <div className="row">
    {university.map(university => (
      <div className="col-lg-4 col-md-6" key={university.id}>
        <div className="university-card">
          <div className="logo-container">
            <img src={university.logo} alt={university.name} className="logo" />
          </div>
          <div className="content">
            <h5 className="university-name">{university.name}</h5>
            <p className="location">{university.location}</p>
            <p className="description">{university.description}</p>
            <a href={university.website} className="website-link">Visit Website</a>
          </div>
        </div>
      </div>
    ))}
  </div>
  </div>
</div>

  );
        
};


export default University;
