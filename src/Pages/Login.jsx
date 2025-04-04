import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CSS/Login.css";

const Login = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // ✅ Success message state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(""); // Reset success message on new request

    const url = isSignup ? "http://localhost:4000/signup" : "http://localhost:4000/login";

    try {
      const response = await axios.post(url, form);
      localStorage.setItem("token", response.data.token);

      setSuccess(isSignup ? "Thank you for signing up! 🎉" : "Welcome back! 🎉");
      
      // ✅ Redirect to Shop.jsx after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
      
    } catch (err) {
      setError("Something went wrong! Please check your details.");
    }
  };

  return (
    <div className="Login">
      <div className="login-container">
        <h1>{isSignup ? "Sign Up" : "Login"}</h1>
        
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>} {/* ✅ Show success message */}

        <form onSubmit={handleSubmit}>
          <div className="login-fields">
            {isSignup && <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />}
            <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          </div>
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>

        <p className="toggle-auth">
          {isSignup ? "Already have an account?" : "Don't have an account?"}  
          <span onClick={() => setIsSignup(!isSignup)}> {isSignup ? "Login Here" : "Sign Up"}</span>
        </p>
        
        <div className="login-agree">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;