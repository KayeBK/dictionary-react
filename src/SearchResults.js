import React from "react";
import Meaning from "./Meaning";

export default function SearchResults(props) {
    if (props.data) {
        return (
            <div className="SearchResults">
                <section>
                <h2 className="SearchResults-word">{props.data.word}</h2>
                <em className="SearchResults-phonetic">{props.data.phonetic}</em>
                </section>
                <div className="row">
                {props.data.meanings.map(function(meaning, index) {
                    return (
                    <section className="col-3">
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                    </section>
                    );
                })}
                </div>
            </div>
            );
    } else {
        return null;
    }
}