"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  delay?: number;
  className?: string;
}

export default function TestimonialCard({
  content,
  author,
  role,
  company,
  rating = 5,
  delay = 0,
  className,
}: TestimonialCardProps) {
  const avatarColors = [
    { bg: "#0B2C5F", text: "#C89B3C" },
    { bg: "#071c3e", text: "#e8c97a" },
    { bg: "#0d3060", text: "#C89B3C" },
  ];
  const avatar = avatarColors[author.charCodeAt(0) % avatarColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" as const }}
      className={cn(
        "group relative overflow-hidden bg-white flex flex-col border border-brand-accent/60 hover:border-brand-primary/15 hover:shadow-[0_16px_48px_rgba(11,44,95,0.1)] transition-all duration-350",
        className
      )}
    >
      {/* Top gold accent — full width reveal */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Large decorative quote */}
      <div
        className="absolute top-4 right-6 font-serif leading-none select-none pointer-events-none text-brand-secondary/6 group-hover:text-brand-secondary/10 transition-colors duration-500"
        style={{ fontSize: "8rem", lineHeight: 1, fontFamily: "var(--font-poppins), sans-serif" }}
        aria-hidden
      >
        &ldquo;
      </div>

      <div className="relative z-10 flex flex-col h-full p-7 md:p-8">

        {/* Stars */}
        <div className="flex items-center gap-0.5 mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 16 16" className="w-3.5 h-3.5" style={{ fill: i < rating ? "#C89B3C" : "#E2E8F0" }}>
              <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.35l-3.71 2.2.71-4.13L2 5.5l4.15-.75L8 1z" />
            </svg>
          ))}
          <span className="ml-2 text-[9px] font-black text-brand-secondary/60 tracking-[0.2em] uppercase">
            Verified
          </span>
        </div>

        {/* Quote */}
        <blockquote className="text-brand-dark/60 text-sm md:text-[0.9rem] leading-relaxed italic flex-grow mb-7 line-clamp-5">
          &ldquo;{content}&rdquo;
        </blockquote>

        {/* Author strip */}
        <div className="mt-auto pt-5 border-t border-brand-accent/60 flex items-center gap-3.5">

          {/* Avatar */}
          <div
            className="w-10 h-10 flex-shrink-0 flex items-center justify-center font-serif font-bold text-base"
            style={{ background: avatar.bg, color: avatar.text }}
          >
            {author.charAt(0).toUpperCase()}
          </div>

          {/* Name + role */}
          <div className="min-w-0 flex-1">
            <div className="font-serif font-bold text-brand-dark text-[0.9rem] leading-tight truncate">{author}</div>
            <div className="text-[10px] font-semibold mt-0.5 truncate text-brand-secondary">
              {role}
              <span className="text-brand-dark/25 mx-1.5">·</span>
              <span className="text-brand-dark/40">{company}</span>
            </div>
          </div>

          {/* Company badge */}
          <div
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[10px] font-black uppercase border border-brand-accent/60 text-brand-dark/30"
          >
            {company.charAt(0)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}