import React from "react";

const SearchForm = ({ searchTerm, setSearchTerm, userInput, setUserInput, callGeniusAPI }) => {
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(userInput);
    callGeniusAPI(searchTerm);
  };
  return (
    <div className="search-form-component">
      <form>
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Enter a search term for the Genius API (ex: ''Kendrick Lamar'')"
        />
      </form>
      <p>Search Term: {searchTerm}</p>
      <button onClick={handleSubmit}>Call Genius API</button>
    </div>
  );
};

export default SearchForm;
