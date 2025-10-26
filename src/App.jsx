// D:/samplepage/REACT/my-app/src/App.jsx
import React from 'react';
// Updated imports for react-router-dom v6
import {
    BrowserRouter as Router,
    Routes, // Replaces Switch
    Route,
    Link,
    useNavigate
} from 'react-router-dom';
import './App.css';

// --- Page Components (No changes needed here) ---
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

// --- Login Component (Refactored for best practices) ---
const Login = () => {
    // useNavigate is the correct hook for v6
    const navigate = useNavigate();

    // Use an onSubmit handler for the form
    const handleLoginSubmit = (event) => {
        // Prevent the default form behavior which causes a page reload
        event.preventDefault();
        if (event) {
            console.log(event);
        }

        // Here you would normally have some authentication logic.
        // After successful login, you navigate to the desired route.
        console.log('Login form submitted, navigating to /home');
        navigate('/home');
    };

    // It's better to use a <form> for semantic HTML and accessibility
    return (
        <form className="login-container" onSubmit={handleLoginSubmit}>
            <h2>Login</h2>
            <label>
                <input type="text" placeholder="Username" required />
            </label>
            <label>
                <input type="password" placeholder="Password" required />
            </label>
            <label>
                <input type="checkbox" />Remember me
            </label>
            {/* A button with type="submit" will trigger the form's onSubmit event */}
            <button type="submit">Login</button>
        </form>
    );
};


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