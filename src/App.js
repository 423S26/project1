import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/shop" element={<h1>Shop Page</h1>} />
                <Route path="/community" element={<h1>Community Page</h1>} />
                <Route path="/contact" element={<h1>Contact Page</h1>} />
            </Routes>
        </>
    );
}

export default App;