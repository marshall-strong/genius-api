import React, { useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import { client_id, client_secret, client_access_token } from "./GeniusSecrets";

const GeniusAPI = () => {
  const [searchTerm, setSearchTerm] = useState("Kendrick Lamar");
  const [userInput, setUserInput] = useState("Kendrick Lamar");
  const [geniusResponse, setGeniusResponse] = useState(null);
  
  const callGeniusAPI = async () => {
    const geniusSearchURL = `http://api.genius.com/search?q=${searchTerm}&access_token=${client_access_token}`;
    try {
      const response = await axios({
        method: "get",
        url: geniusSearchURL,
        headers: {},
      });
      console.log(response.data);
      setGeniusResponse(response);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="GeniusAPI">
      <h1>Genius API</h1>
      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        userInput={userInput}
        setUserInput={setUserInput}
        callGeniusAPI={callGeniusAPI}
      />
      {!geniusResponse ? (
        <p className="GeniusResponse">
          <i>No response...</i>
        </p>
      ) : geniusResponse.data.response.hits.length === 0 ? (
        <p className="GeniusResponse">
          <i>No results</i>
        </p>
      ) : (
        <div className="GeniusResponse">
          <p>{"response.data.meta.status: "}</p>
          <code>{geniusResponse.data.meta.status}</code>
        </div>
      )}
    </div>
  );
};

export default GeniusAPI;
