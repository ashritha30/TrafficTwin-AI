import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await login(email, password);

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("name", data.name);

      navigate("/dashboard");
   } catch (error: any) {
  console.log("Login Error:", error);
  console.log("Response:", error.response);

  alert(
    error.response?.data?.detail ||
    error.message ||
    "Login Failed"
  );
}
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
      <div className="bg-slate-900 p-8 rounded-xl w-96">

        <h1 className="text-3xl font-bold text-cyan-400 mb-6">
          TrafficTwin AI
        </h1>

        <input
          className="w-full p-3 mb-4 rounded bg-slate-800 text-white"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-4 rounded bg-slate-800 text-white"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-cyan-500 py-3 rounded-lg"
        >
          Login
        </button>

      </div>
    </div>
  );
}