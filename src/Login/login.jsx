// --- Login Component (Refactored for best practices) ---
import {
    useNavigate
} from 'react-router-dom';

export const Login = () => {
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