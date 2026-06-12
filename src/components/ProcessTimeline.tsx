"use client";

import { motion } from "framer-motion";
import { Search, Users, UserCheck, Briefcase, Rocket } from "lucide-react";
import { ReactNode } from "react";

interface Step {
  icon: ReactNode;
  title: string;
  desc: string;
}

const steps: Step[] = [
  { icon: <Search className="w-5 h-5" />, title: "Requirement Analysis", desc: "Deep dive into your corporate culture, role specifics, and business objectives." },
  { icon: <Users className="w-5 h-5" />, title: "Sourcing & Screening", desc: "Leveraging our vast network to identify and evaluate premium talent." },
  { icon: <UserCheck className="w-5 h-5" />, title: "Client Interviews", desc: "Presenting only the most qualified, culturally-aligned candidates." },
  { icon: <Briefcase className="w-5 h-5" />, title: "Selection & Offer", desc: "Managing negotiations and ensuring seamless, confident offer acceptance." },
  { icon: <Rocket className="w-5 h-5" />, title: "Deployment", desc: "Ongoing support ensuring smooth onboarding and long-term team success." },
];

export default function ProcessTimeline() {
  return (
    <div className="relative max-w-6xl mx-auto py-8">

      {/* Desktop connector line */}
      <div className="hidden lg:block absolute top-[3.6rem] left-[10%] right-[10%] h-[2px] overflow-hidden">
        <div className="absolute inset-0 bg-slate-200" />
        <motion.div
          className="absolute top-0 left-0 h-full"
          style={{ background: "linear-gradient(to right, #18A6D9, #4330A3)" }}
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        />
      </div>

      <div className="grid lg:grid-cols-5 gap-5 relative">
        {steps.map((step, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="relative flex flex-col items-center text-center group bg-white border border-slate-100/60 rounded-xl p-4 hover:shadow-xl hover:border-[#18A6D9]/20 transition-all duration-300"
            >
              {/* Mobile connector */}
              {i < steps.length - 1 && (
                <div
                  className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-8 z-0"
                  style={{ background: "linear-gradient(to bottom, #4330A3, #18A6D9)" }}
                />
              )}

              {/* Icon block */}
              <div className="relative z-10 mb-6">
                {/* Step number badge */}
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center text-[10px] font-bold text-white bg-[#18A6D9] rounded-md z-20 shadow-sm"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon Container */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-200 text-[#4330A3] group-hover:bg-[#4330A3] group-hover:text-white transition-all duration-300 group-hover:-translate-y-1"
                >
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-sans font-bold text-[#0F172A] text-base leading-snug mb-2 group-hover:text-[#18A6D9] transition-colors duration-300">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-slate-500 text-xs leading-relaxed max-w-[12rem] mx-auto font-light font-sans">
                {step.desc}
              </p>

              {/* Decorative accent bottom line on hover */}
              <div className="mt-4 h-[2px] w-0 group-hover:w-8 bg-[#18A6D9] transition-all duration-300" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}