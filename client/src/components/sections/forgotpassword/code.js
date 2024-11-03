import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CodeVerification = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fromForgotPassword = localStorage.getItem("fromForgotPassword");
    if (!fromForgotPassword) {
      navigate("/forgot-password");
    }
  }, [navigate]);

  const handleVerify = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/verifyResetToken",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: code }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("verificationCode", code);
        localStorage.setItem("fromCodeVerification", true);
        navigate("/newpassword");
      } else {
        setError(data.message || "Token inválido. Tente novamente.");
      }
    } catch (error) {
      setError("Erro ao conectar ao servidor.");
    }
  };

  return (
    <section className="flex justify-center items-center py-16 bg-[#141313]">
      <div className="bg-[#1C1C1C] p-12 rounded-2xl shadow-lg w-full max-w-5xl text-center">
        <h2 className="text-5xl font-bold text-[#A5E404] mb-8">
          Code Verification
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <p className="text-[#C4C4C4] mb-8">
          Please insert your code so we can verify that you have received it!
        </p>
        <input
          type="text"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full max-w-2xl px-6 py-4 text-lg rounded-full bg-[#2C2C2C] text-[#C4C4C4] mb-8"
        />
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={handleVerify}
            className="w-5/12 py-3 rounded-full bg-[#a5e404] text-black hover:bg-[#93c603] transition"
          >
            Verify
          </button>
          <button
            onClick={() => navigate("/forgot-password")}
            className="w-5/12 py-3 rounded-full bg-[#2C2C2C] text-[#C4C4C4] hover:bg-[#3a3a3a] transition"
          >
            Not received the code?
          </button>
        </div>
      </div>
    </section>
  );
};

export default CodeVerification;
