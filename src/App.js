import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Card from "./components/Card";
import Footer from "./components/Footer";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Card />
            <Footer />
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);