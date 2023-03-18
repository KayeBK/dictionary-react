import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults"
import Photos from "./Photos"
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleDictionaryResponse(response) {
        setResults(response.data);
    }

    function handleImageResponse(response) {
        setPhotos(response.data);
    }

    function search() {
        let apiKey = `0e89d84fo638t41edd00d5b9415a6a37`
        let apiUrlDictionary = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrlDictionary).then(handleDictionaryResponse);
        let apiUrlImage = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
        axios.get(apiUrlImage).then(handleImageResponse);
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
            <Photos data={photos} />
        </div>
    );
} else {
    load();
    return "Loading...";
}
    
}