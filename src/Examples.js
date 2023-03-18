import React from "react";

export default function Examples(props) {
    if (props.examples) {
        return (
            <div className="Examples">
            <strong>Examples:</strong>{props.example}
            </div>
        );
    } else {
        return null;
    }
}