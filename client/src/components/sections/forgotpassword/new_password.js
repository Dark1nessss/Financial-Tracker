import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fromCodeVerification = localStorage.getItem("fromCodeVerification");
    if (!fromCodeVerification) {
      navigate("/code"); // Redireciona caso o código de verificação não esteja confirmado
    }
  }, [navigate]);

  const handleSetPassword = async () => {
    const verificationCode = localStorage.getItem("verificationCode"); // Obtém o código salvo no localStorage
    console.log(verificationCode);

    if (!verificationCode) {
      setError("Código de verificação não encontrado.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/resetPassword",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: verificationCode, // envia o código de verificação
            password: newPassword,
            confirmPassword: confirmPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Senha redefinida com sucesso!");
        localStorage.removeItem("verificationCode"); // Limpa o código após sucesso
        localStorage.removeItem("fromCodeVerification"); // Limpa a confirmação
        navigate("/login");
      } else {
        setError(data.message || "Erro ao redefinir a senha.");
      }
    } catch (error) {
      setError("Erro ao conectar ao servidor.");
    }
  };

  return (
    <section className="flex justify-center items-center py-16 bg-[#141313]">
      <div className="bg-[#1C1C1C] p-12 rounded-2xl shadow-lg w-full max-w-5xl text-center">
        <h2 className="text-5xl font-bold text-[#A5E404] mb-8">Nova Senha</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <p className="text-[#C4C4C4] mb-8">
          Insira uma nova senha e salve-a em algum lugar seguro!
        </p>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="password"
            placeholder="Nova Senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full max-w-2xl px-6 py-4 text-lg rounded-full bg-[#2C2C2C] text-[#C4C4C4] mb-4"
          />
          <input
            type="password"
            placeholder="Confirme Nova Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full max-w-2xl px-6 py-4 text-lg rounded-full bg-[#2C2C2C] text-[#C4C4C4] mb-8"
          />
          <button
            onClick={handleSetPassword}
            className="w-5/12 py-3 rounded-full bg-[#a5e404] text-black hover:bg-[#93c603] transition"
          >
            Redefinir senha
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewPassword;
