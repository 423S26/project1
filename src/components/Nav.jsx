import NavItem from "./NavItem";
import { Link as RouterLink } from 'react-router-dom';
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {sage} from "./shared-theme/themePrimitives";
import logo from '/Images/market logo.svg';

function Nav(){
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };


    return(
        <nav style={{ fontFamily: "'SatisfyR'" }}>
            <div className="flex items-center justify-between gap-4 px-8 py-2 text-[#3A4B36] ">
                <RouterLink to="/" className="header_logo-link" aria-label="Go to home page">
                    <div className="header_logo" style={{ width: '200px', height: '200px' }}>
                        <img src={logo} alt="logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                </RouterLink>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/shop">Shop</NavItem>
                <NavItem to="/community">Community</NavItem>
                <NavItem to="/Documentation">Documentation</NavItem>
                {user ? (
                    <>
                    <span className="text-2xl">
                        Hello, {user.displayName || user.email}
                    </span>
                    <button
                        onClick={handleLogout}
                        className="font-medium text-2xl px-3 py-1 rounded-lg transition-colors duration-200 hover:bg-[#8B9D83]"
                    >
                        Logout
                    </button>
                    </>
                ) : (
                    <>
                        <NavItem to="/signup">Sign Up</NavItem>
                    </>
                )}
            </div>
        </nav>
    )
};

export default Nav