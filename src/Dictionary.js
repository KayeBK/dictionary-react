import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults"

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data);
    }

    function search() {
        let apiKey = `0e89d84fo638t41edd00d5b9415a6a37`
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
    setLoaded(true);
    search();
    }

if (loaded) {
    return (
        <div className="Dictionary">
            <section>
            <div className="Dictionary-description">Enter a word below to search:</div>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleKeywordChange} />
                <input type="submit" value="Search" />
            </form>
            </section>
            <SearchResults data={results} />
        </div>
    );
} else {
    load();
    return "Loading...";
}
    
}