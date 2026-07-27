"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Instagram, Linkedin, Twitter, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", entreprise: "", telephone: "", email: "", message: "" });

  function update(field: string) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `Nouveau message depuis le site Mokodomo Tech`,
      `Nom : ${form.nom}`,
      form.entreprise && `Entreprise : ${form.entreprise}`,
      `Téléphone : ${form.telephone}`,
      `Email : ${form.email}`,
      ``,
      form.message,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/221781901424?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[60ch] mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent2">
            Parlons de votre projet
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Contact</h2>
          <p className="mt-4 text-white/60 text-base md:text-lg">
            Décrivez-nous votre besoin, nous revenons vers vous rapidement avec une proposition claire.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <Row icon={<MessageCircle size={18} />} label="WhatsApp" value="78 190 14 24" />
            <Row icon={<Mail size={18} />} label="Email" value="mokodomo77@gmail.com" />
            <Row icon={<MapPin size={18} />} label="Adresse" value="Ziguinchor, Sénégal" last />
            <div className="flex gap-3 mt-6">
              {[Instagram, Linkedin, Twitter, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href={i === 3 ? "https://wa.me/221781901424" : "#"}
                  target={i === 3 ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-line flex items-center justify-center hover:bg-white/[0.08] transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nom" type="text" required value={form.nom} onChange={update("nom")} />
                <Field label="Entreprise" type="text" value={form.entreprise} onChange={update("entreprise")} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Téléphone" type="tel" required value={form.telephone} onChange={update("telephone")} />
                <Field label="Email" type="email" required value={form.email} onChange={update("email")} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-white/60">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  className="bg-white/[0.04] border border-line rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-accent2"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold text-sm bg-grad-accent hover:-translate-y-0.5 transition-transform"
              >
                Envoyer sur WhatsApp <Send size={16} />
              </button>
              <p className="text-xs text-white/40 text-center">
                Vous serez redirigé vers WhatsApp avec votre message pré-rempli.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Row({ icon, label, value, last }: { icon: React.ReactNode; label: string; value: string; last?: boolean }) {
  return (
    <div className={`flex gap-4 items-center py-4 ${last ? "" : "border-b border-line"}`}>
      <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent2 shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs text-white/50">{label}</div>
        <div className="font-bold text-sm">{value}</div>
      </div>
    </div>
  );
}

function Field({
  label, type, required, value, onChange,
}: {
  label: string; type: string; required?: boolean;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-white/60">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="bg-white/[0.04] border border-line rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-accent2"
      />
    </div>
  );
}
