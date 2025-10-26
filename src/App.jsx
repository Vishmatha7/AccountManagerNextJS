// D:/samplepage/REACT/my-app/src/App.jsx
import React from 'react';
// Updated imports for react-router-dom v6
import {
    BrowserRouter as Router,
    Routes, // Replaces Switch
    Route,
    Link,
} from 'react-router-dom';
import './App.css';
import { Login } from './Login/login';

// --- Page Components (No changes needed here) ---
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;


// --- Main App Component (Updated for v6 routing) ---
const App = () => {
    return (
        <Router>
            <div>
                {/* This navigation will be visible on all pages */}
                <nav style={{ padding: '10px', background: '#f0f0f0', marginBottom: '1rem' }}>
                    <Link to="/">Login</Link> |
                    <Link to="/home"> Home</Link> |
                    <Link to="/about"> About</Link> |
                    <Link to="/contact"> Contact</Link>
                </nav>

                {/* In v6, <Switch> is replaced by <Routes> */}
                <Routes>
                    {/* The route definition syntax now uses the "element" prop */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;