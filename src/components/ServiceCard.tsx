"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
  delay?: number;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  image,
  delay = 0,
  className,
}: ServiceCardProps) {
  const anchorId = title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col md:flex-row gap-6 bg-white border border-slate-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:border-[#18A6D9]/30 overflow-hidden cursor-default min-h-[220px]",
        className
      )}
    >
      {/* Content Column (60% width on md screens) */}
      <div className="flex-grow md:w-[60%] flex flex-col justify-between relative z-10">
        <div>
          {/* Icon + Title */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#4330A3] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#4330A3] group-hover:text-white flex-shrink-0">
              <span className="[&_svg]:w-5 [&_svg]:h-5">
                {icon}
              </span>
            </div>
            <h3 className="font-sans font-bold text-[#0F172A] text-lg lg:text-xl leading-snug group-hover:text-[#18A6D9] transition-colors duration-300">
              {title}
            </h3>
          </div>

          <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4 font-light font-sans">
            {description}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
          <Link
            href={`/services#${anchorId}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4330A3] hover:text-[#18A6D9] transition-colors duration-300 font-sans"
          >
            <span>Explore Solutions</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Image Column (40% width on md screens) - ALWAYS VISIBLE */}
      <div className="relative w-full md:w-[40%] h-[160px] md:h-auto rounded-lg overflow-hidden border border-slate-100 flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-w-7xl) 20vw, 40vw"
          className="object-cover transition-transform duration-500 scale-100 group-hover:scale-105"
        />
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-[#0F172A]/10 group-hover:bg-transparent transition-colors duration-350" />
      </div>
    </motion.div>
  );
}