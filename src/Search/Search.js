import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
    const [query, setQuery] = useState('');
    const handleInputChange = (event) => {
        setQuery(event.target.value);
      };

      const handleSearch = () => {
        axios.get(`http://localhost:44366/Api/Search/Search/?query=${query}`)
          .then((response) => {
            // Handle the response data
            console.log(response.data);
          })
          .catch((error) => {
            // Handle the error
            console.error(error);
          });
      };
      

  return (
    <div>
    {/* <input type="text" value={query} onChange={handleInputChange} /> */}
      <div className="search-bar">
        <input
            type="text"
            placeholder="Search term 1"
            value={query}
            onChange={e => handleInputChange(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        </div>
    </div>
  );
        
};


export default Search;
