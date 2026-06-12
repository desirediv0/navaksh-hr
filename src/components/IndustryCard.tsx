"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  title: string;
  icon: ReactNode;
  image?: string;
  description?: string;
  delay?: number;
  className?: string;
}

export default function IndustryCard({
  title,
  icon,
  image,
  description,
  delay = 0,
  className,
}: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={cn("group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-md", className)}
      style={{ aspectRatio: "4/5" }}
    >
      <Link href="/industries" className="block h-full w-full">

        {/* Background photo */}
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-75"
            sizes="(max-w: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          />
        ) : (
          <div className="absolute inset-0 bg-[#0F172A]" />
        )}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            background: "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.6) 55%, rgba(15,23,42,0.2) 100%)",
          }}
        />

        {/* Left accent line reveal */}
        <div className="absolute top-0 left-0 bottom-0 w-[3px] z-30 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom bg-[#18A6D9]" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col p-5 md:p-6 justify-between h-full">

          {/* Icon */}
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10 bg-white/5 group-hover:border-[#18A6D9] group-hover:bg-[#18A6D9] transition-all duration-300"
          >
            <span className="[&_svg]:w-4 [&_svg]:h-4 text-white/80 group-hover:text-white transition-colors duration-300">
              {icon}
            </span>
          </div>

          {/* Push to bottom */}
          <div>
            {description && (
              <p className="text-white/60 text-xs leading-relaxed mb-2 line-clamp-2">
                {description}
              </p>
            )}

            <h3 className="font-sans text-base md:text-lg leading-snug text-white mb-4 font-bold group-hover:text-[#18A6D9] transition-colors duration-300">
              {title}
            </h3>

            {/* Footer row */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-[#18A6D9] transition-colors duration-300">
                Explore Sector
              </span>
              <div className="w-6 h-6 rounded-md flex items-center justify-center border border-white/10 bg-white/5 group-hover:border-[#18A6D9] group-hover:bg-[#18A6D9] transition-all duration-300">
                <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover:text-white transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}