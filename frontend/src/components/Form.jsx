import { useState } from "react";
import api from "../api";
import { useNavigate, Link } from "react-router-dom";
import { ACCESS_TOKENS, REFRESH_TOKENS } from "../constants";
import "../styles/Form.css"
import Loadingindicator from "./Lodingindicator";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKENS, res.data.access);
                localStorage.setItem(REFRESH_TOKENS, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {loading && <Loadingindicator />} 
            <button className="form-button" type="submit">
                {name}
            </button>
            
            <div className="form-redirect">
                {method === "login" ? (
                    <p>Don't have an account? <Link to="/register" className="redirect-link">Register here</Link></p>
                ) : (
                    <p>Already have an account? <Link to="/login" className="redirect-link">Login here</Link></p>
                )}
            </div>
        </form>
    );
}

export default Form