"use client";

import { useState } from "react";
import {
  Send, CheckCircle2, AlertCircle, Loader2,
  User, Mail, Phone, ChevronDown,
} from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const services = [
  "Manpower Outsourcing",
  "Transport Management",
  "HR Recruitment",
  "Facility Management",
  "Other",
];

/* ── Shared input class — sharp edges, consistent focus ── */
const inputClass =
  "w-full bg-[#F8FAFC] border border-slate-200 px-4 py-3 text-[0.88rem] text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-[#18A6D9]/50 focus:shadow-[0_0_0_3px_rgba(24,166,217,0.06)] hover:border-slate-350 rounded-xl";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (form.phone && !form.phone.match(/^[+\d\s\-()]{7,}$/)) e.phone = "Valid phone number required";
    if (!form.message.trim()) e.message = "Please describe your requirements";
    return e;
  };

  const set = (key: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => { const n = { ...er }; delete n[key]; return n; });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.service ? `Service Inquiry: ${form.service}` : "General Inquiry",
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  /* ── Success ── */
  if (status === "success") {
    return (
      <div
        className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-12 rounded-xl border border-slate-200 shadow-xl bg-[#0F172A]"
      >
        {/* Brand top border */}
        <div className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: "linear-gradient(to right, #18A6D9, #4330A3)" }} />

        <div
          className="w-16 h-16 flex items-center justify-center mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/35"
        >
          <CheckCircle2 className="w-7 h-7 text-emerald-400" />
        </div>

        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="w-5 h-[2px] bg-[#18A6D9]" />
          <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#18A6D9]">Message Sent</span>
          <span className="w-5 h-[2px] bg-[#18A6D9]" />
        </div>

        <h3 className="font-sans font-bold text-white text-2xl mb-3 leading-snug">
          We&apos;ll Be In Touch Soon
        </h3>
        <p className="text-white/60 text-[0.88rem] leading-relaxed max-w-xs mb-10 font-sans font-light">
          Our team responds within{" "}
          <span className="text-[#18A6D9] font-bold">2 business hours</span>.
          Thank you for reaching out.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-200"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden bg-white rounded-xl border border-slate-200 shadow-xl"
    >
      {/* Brand top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(to right, #18A6D9, #4330A3)" }} />

      {/* Form header */}
      <div className="px-6 pt-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5 mb-1.5">
          <span className="w-5 h-[2px] bg-[#18A6D9]" />
          <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#18A6D9]">
            Free Consultation
          </span>
        </div>
        <h3 className="font-sans font-bold text-[#0F172A] text-lg md:text-xl leading-snug">
          Send an Enquiry
        </h3>
        <p className="text-slate-400 text-[11px] mt-0.5">
          Typically replied within 2 business hours
        </p>
      </div>

      {/* Form fields */}
      <form onSubmit={handleSubmit} noValidate className="px-6 py-6 space-y-4">

        {/* Row 1: Name + Phone */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text" value={form.name} onChange={set("name")}
                placeholder="Rajiv Sharma"
                className={`${inputClass} pl-9 ${errors.name ? "border-red-300 focus:border-red-400" : ""}`}
              />
            </div>
            {errors.name && <ErrorMsg msg={errors.name} />}
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1.5">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              <input
                type="tel" value={form.phone} onChange={set("phone")}
                placeholder="+91 98765 43210"
                className={`${inputClass} pl-9 ${errors.phone ? "border-red-300 focus:border-red-400" : ""}`}
              />
            </div>
            {errors.phone && <ErrorMsg msg={errors.phone} />}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            <input
              type="email" value={form.email} onChange={set("email")}
              placeholder="you@company.com"
              className={`${inputClass} pl-9 ${errors.email ? "border-red-300 focus:border-red-400" : ""}`}
            />
          </div>
          {errors.email && <ErrorMsg msg={errors.email} />}
        </div>

        {/* Service */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1.5">
            Service Required
          </label>
          <div className="relative">
            <select
              value={form.service} onChange={set("service")}
              className={`${inputClass} appearance-none cursor-pointer pr-9`}
            >
              <option value="">Select a service...</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1.5">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            value={form.message} onChange={set("message")}
            rows={4} placeholder="Describe your requirements, headcount, location..."
            className={`${inputClass} resize-none ${errors.message ? "border-red-300 focus:border-red-400" : ""}`}
          />
          {errors.message && <ErrorMsg msg={errors.message} />}
        </div>

        {/* API error */}
        {status === "error" && (
          <div className="flex items-center gap-2.5 px-4 py-3 border border-red-200 bg-red-50 rounded-xl">
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
            <p className="text-red-600 text-[0.82rem]">
              Something went wrong. Please try again or call us directly.
            </p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="relative w-full flex items-center justify-center gap-2.5 py-3.5 text-[0.82rem] font-bold uppercase tracking-[0.15em] text-white overflow-hidden transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md disabled:opacity-60 disabled:pointer-events-none group rounded-xl"
          style={{
            backgroundColor: "#4330A3",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#18A6D9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#4330A3";
          }}
        >
          {status === "submitting" ? (
            <><Loader2 className="w-4 h-4 animate-spin relative z-10" />
              <span className="relative z-10">Sending...</span></>
          ) : (
            <><Send className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Send Enquiry</span></>
          )}
        </button>

        <p className="text-center text-slate-350 text-[9px] font-bold uppercase tracking-[0.15em]">
          No spam · Fully confidential · Zero obligation
        </p>
      </form>
    </div>
  );
}

function ErrorMsg({ msg }: { msg: string }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-[0.75rem] text-red-500">
      <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
      {msg}
    </p>
  );
}