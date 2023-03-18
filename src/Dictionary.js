import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults"

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function search(event) {
        event.preventDefault();

        let apiKey = `0e89d84fo638t41edd00d5b9415a6a37`
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <div className="Dictionary-container">
            <div className="Dictionary-description">Enter a word below to search:</div>
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
                <input type="submit" value="Search" />
            </form>
            </div>
            <SearchResults data={results} />
        </div>
    );
}