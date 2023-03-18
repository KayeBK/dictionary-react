import React from "react";
import Meaning from "./Meaning";

export default function SearchResults(props) {
    if (props.data) {
        return (
            <div className="SearchResults">
                <div className="word-container">
                <h2 className="SearchResults-word">{props.data.word}</h2>
                <em className="SearchResults-phonetic">{props.data.phonetic}</em>
                </div>
                <div className="row">
                {props.data.meanings.map(function(meaning, index) {
                    return (
                    <div className="col-3">
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                    </div>
                    );
                })}
                </div>
                </div>
            );
    } else {
        return null;
    }
}