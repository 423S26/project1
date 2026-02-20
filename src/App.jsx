import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SignUp from "./components/sign-up/SignUp";
import SignIn from "./components/sign-in/SignIn";
import Home from "./Pages/Home";
import Community from "./Pages/Community";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import {Login} from "@mui/icons-material";
import Documentation from "./Pages/Documentation";




function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/community" element={<Community />} />
                <Route path="/contact"  element={<Contact />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin"  element={<SignIn />}/>
                <Route path="/documentation" element={<Documentation />} />
            </Routes>
        </>
    );
}

export default App;