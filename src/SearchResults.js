import React from "react";
import Meaning from "./Meaning";
import "./SearchResults.css"

export default function SearchResults(props) {
    if (props.data) {
        return (
            <div className="SearchResults">
                <section>
                <h2 className="SearchResults-word">{props.data.word}</h2>
                <em className="SearchResults-phonetic">{props.data.phonetic}</em>
                </section>
                {props.data.meanings.map(function(meaning, index) {
                    return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                    );
                })}
                </div>
            );
    } else {
        return null;
    }
}