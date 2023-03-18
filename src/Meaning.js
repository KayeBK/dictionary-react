import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
    console.log(props.meaning.example);
    if (props.meaning) {
        return (
        <div className="Meaning">
        <h5>{props.meaning.partOfSpeech}</h5>
        <strong>Definition:</strong> {props.meaning.definition}
        <br /> 
        <Examples examples={props.meaning.examples} />
        <br />
        <Synonyms synonyms={props.meaning.synonyms} />
        </div>
    );
            } else {
                return null;
            }
}