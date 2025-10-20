import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
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

    const newUser = { name, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    alert("Account created successfully! Please log in.");
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
      <h2 className="text-6xl font-bold text-green-700 mb-8">Sign Up</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-lg flex flex-col gap-6"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border-2 border-gray-300 p-5 rounded-xl text-xl"
        />
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
          className="bg-green-700 hover:bg-green-800 text-white py-4 rounded-full text-2xl font-bold transition"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-6 text-lg text-gray-700">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-green-700 hover:underline text-xl font-semibold"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;

