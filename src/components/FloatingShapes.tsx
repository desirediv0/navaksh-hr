"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

      {/* ── Dot grid pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Large primary glow — top right ── */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(11,44,95,0.35) 0%, transparent 70%)",
        }}
      />

      {/* ── Gold glow — bottom left ── */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(200,155,60,0.2) 0%, transparent 65%)",
        }}
      />

      {/* ── Mid accent — center right ── */}
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[38%] right-[12%] w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(200,155,60,0.12) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* ── Geometric ring — top left ── */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -left-24 w-72 h-72 opacity-[0.06]"
        style={{
          border: "1.5px solid rgba(200,155,60,0.8)",
          borderRadius: "50%",
        }}
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute -top-16 -left-16 w-56 h-56 opacity-[0.04]"
        style={{
          border: "1px solid rgba(255,255,255,0.9)",
          borderRadius: "50%",
        }}
      />

      {/* ── Small floating orbs ── */}
      <motion.div
        animate={{ y: [0, -24, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[18%] left-[18%] w-3 h-3 rounded-full bg-brand-secondary/60"
        style={{ filter: "blur(1px)" }}
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[60%] right-[22%] w-2 h-2 rounded-full bg-brand-secondary/50"
        style={{ filter: "blur(0.5px)" }}
      />
      <motion.div
        animate={{ y: [0, -14, 0], x: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[30%] left-[38%] w-2.5 h-2.5 rounded-full bg-white/30"
        style={{ filter: "blur(0.5px)" }}
      />

      {/* ── Diagonal light streak ── */}
      <div
        className="absolute top-0 left-[30%] w-px h-full opacity-[0.03]"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(200,155,60,0.9) 40%, rgba(200,155,60,0.9) 60%, transparent)",
          transform: "rotate(15deg) scaleY(1.5)",
        }}
      />

      {/* ── Bottom fade vignette ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 opacity-40"
        style={{
          background: "linear-gradient(to top, rgba(11,44,95,0.15), transparent)",
        }}
      />
    </div>
  );
}