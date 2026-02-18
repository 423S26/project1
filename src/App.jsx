import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SignUp from "./components/sign-up/SignUp";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/shop" element={<h1>Shop Page</h1>} />
                <Route path="/community" element={<h1>Community Page</h1>} />
                <Route path="/contact" element={<h1>Contact Page</h1>} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </>
    );
}

export default App;