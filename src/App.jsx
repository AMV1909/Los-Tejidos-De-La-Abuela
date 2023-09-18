import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, About, NotFound, Contact, Cares } from "./Pages";
import { Navbar } from "./Components";

import "./App.css";

export function App() {
    return (
        <Router>
            <Navbar />

            <div className="padding-wrapper">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cares" element={<Cares />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}
