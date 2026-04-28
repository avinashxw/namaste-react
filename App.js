import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading", className: "moreclass" }, "Hello World from React!");

const parent = React.createElement("div", {
    id: "parent"},
[
    React.createElement("h1",{id: "parent-child", key: "1"},"This is FIRST child div!"),
    React.createElement("h1",{id: "parent-child", key: "2"},"This is SECOND child div!")

], "This is parent div!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);