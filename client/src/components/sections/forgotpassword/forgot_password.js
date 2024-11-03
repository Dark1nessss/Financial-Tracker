import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleNext = async (e) => {
    // Navigate to the code verification page
    e.preventDefault();
    if (!email) {
      setError("Por favor insira o email.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/forgotPassword",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Envio de email bem-sucedido!");
        localStorage.setItem("fromForgotPassword", true);
        navigate("/code");
      } else {
        setError(data.message || "Erro ao enviar email");
      }
    } catch (error) {
      setError("Erro ao conectar ao servidor");
    }
  };

  return (
    <section className="flex justify-center items-center py-16 bg-[#141313]">
      <form onSubmit={handleNext} className="">
        <div className="bg-[#1C1C1C] p-12 rounded-2xl shadow-lg w-full max-w-5xl text-center">
          <h2 className="text-5xl font-bold text-[#A5E404] mb-8">
            Forgot Password?
          </h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <p className="text-[#C4C4C4] mb-8">
            Please insert your email so we can send a verification towards your
            email!
          </p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-2xl px-6 py-4 text-lg rounded-full bg-[#2C2C2C] text-[#C4C4C4] mb-8"
          />
          <div className="flex flex-col items-center space-y-4">
            <button
              type="submit"
              className="w-5/12 py-3 rounded-full bg-[#a5e404] text-black hover:bg-[#93c603] transition"
            >
              Send email
            </button>
            <button
              onClick={() => navigate("/login")}
              className="w-5/12 py-3 rounded-full bg-[#2C2C2C] text-[#C4C4C4] hover:bg-[#3a3a3a] transition"
            >
              Nvm, I remembered it!
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ForgotPassword;
