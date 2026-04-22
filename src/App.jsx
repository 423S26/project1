import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUp from "./components/sign-up/SignUp";
import SignIn from "./components/sign-in/SignIn";
import Home from "./Pages/Home";
import Community from "./Pages/Community";
import Shop from "./Pages/Shop";
import FeaturedArtist from "./Pages/FeaturedArtist";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import TermsOfService from "./Pages/TermsOfService";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Documentation from "./Pages/Documentation";
import {Login} from "@mui/icons-material";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './components/shared-theme/themePrimitives';




function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                     <Nav />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/community" element={<Community />} />
                            <Route path="/documentation"  element={<Documentation />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/signin"  element={<SignIn />}/>
                            <Route path="/featuredArtist" element={<FeaturedArtist />} />
                            <Route path="/aboutUs" element={<AboutUs />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/termsOfService" element={<TermsOfService />} />
                            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />

                        </Routes>
                        <Footer />
            </ThemeProvider>
        </>
    );
}

export default App;