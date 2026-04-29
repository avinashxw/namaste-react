import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement (render)

const heading = React.createElement("h1",
    {id: "heading", key: "1"},
    "Namaste React!"
)

// JSX - is not HTML in JS
// HTML-like sysntax or XML-like syntax
// transpiles before it reaches to the JS Engine - PARCEL - BABEL

// JSX => Babel transpiles it to React.createElement => ReactElement JS Object => HTMLElement (render)

const jsxheading = <h1>Namaste React with JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);