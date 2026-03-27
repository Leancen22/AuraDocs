"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxJMCh65KxJF3BCLe2xS5UAKhcD16huf9f5QHtfw4AkYY_BKf4n4KRnD8H2Zk7JziWK/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setLoading(true);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: new URLSearchParams({
          email: email,
        }),
      });

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Error enviando email:", err);
      alert("Error al registrarse. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="w-full max-w-md mx-auto mt-8">
      {!submitted ? (
        <motion.form 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit} 
          className="relative flex items-center glass p-2 rounded-xl"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introduce tu email para acceso anticipado..."
            className="w-full bg-transparent border-none outline-none text-text-primary placeholder:text-text-secondary px-4 py-3"
            required
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.5)] disabled:opacity-70 cursor-pointer"
          >
            {loading ? "Enviando..." : "Unirse"}
            {!loading && <Send size={18} />}
          </button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-6 rounded-xl flex flex-col items-center justify-center text-center gap-3 border-[#10b981]/30 bg-[#10b981]/5"
        >
          <CheckCircle className="text-emerald-400 w-12 h-12 mb-2" />
          <h3 className="text-xl font-bold text-white">¡Estás en la lista!</h3>
          <p className="text-[var(--color-text-secondary)]">
            Te avisaremos en cuanto abramos los primeros accesos.
          </p>
        </motion.div>
      )}
    </div>
  );
}
