import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (user && email === user.email && password === user.password) {
      localStorage.setItem("isLoggedIn", "true");
      alert(`Welcome back, ${user.name || "User"}!`);
      navigate("/");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
      <h2 className="text-6xl font-bold text-blue-700 mb-8">Login</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-lg flex flex-col gap-6"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-2 border-gray-300 p-5 rounded-xl text-xl"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border-2 border-gray-300 p-5 rounded-xl text-xl"
        />
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-full text-2xl font-bold transition"
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-lg text-gray-700">
        Don’t have an account?{" "}
        <Link
          to="/signin"
          className="text-blue-700 hover:underline text-xl font-semibold"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
