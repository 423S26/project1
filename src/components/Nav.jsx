import NavItem from "./NavItem";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        <nav className="">
            <div className="flex items-center justify-end gap-4 px-8 py-4">
                <NavItem to="/">Home</NavItem>
                <NavItem to="/shop">Shop</NavItem>
                <NavItem to="/community">Community</NavItem>
                <NavItem to="/Documentation">Documentation</NavItem>
                {user ? (
                    <>
                    <span className="font-medium">
                        Hello, {user.displayName || user.email}
                    </span>
                    <button
                        onClick={handleLogout}
                        className="font-medium px-3 py-1 rounded-lg transition-colors duration-200 hover:bg-[#8B9D83]"
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