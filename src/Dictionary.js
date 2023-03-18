import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults"
import "./Dictionary.css";

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
            <form onSubmit={search}>
                <input type="search" placeholder="Enter a word.." onChange={handleKeywordChange} />
                <input type="submit" value="Search" />
            </form>
            <SearchResults data={results} />
        </div>
    );
}