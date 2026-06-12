"use client";

import { cn } from "@/lib/utils";
import React from "react";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
}

export function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-12 px-2">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative p-8 rounded-xl overflow-hidden transition-all duration-300",
            "border border-slate-200/80 bg-white",
            "hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)] hover:border-[#18A6D9]/30",
            "hover:-translate-y-0.5 will-change-transform flex flex-col justify-between min-h-[220px]",
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
            item.hasPersistentHover && "shadow-[0_12px_36px_rgba(15,23,42,0.08)] -translate-y-0.5 border-[#18A6D9]/30"
          )}
        >
          {/* Subtle Grid Dot Background Pattern */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-300 pointer-events-none",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,166,217,0.04)_1px,transparent_1px)] bg-[length:12px_12px]" />
          </div>

          <div className="relative flex flex-col space-y-4 z-10 h-full justify-between">
            <div>
              {/* Header: Icon + Status */}
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 text-[#4330A3] transition-colors duration-300 group-hover:bg-[#4330A3] group-hover:text-white">
                  {item.icon}
                </div>
                <span
                  className={cn(
                    "text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider",
                    "bg-slate-100 text-slate-500",
                    "transition-colors duration-300 group-hover:bg-[#18A6D9]/10 group-hover:text-[#18A6D9]"
                  )}
                >
                  {item.status || "Active"}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-bold text-[#0F172A] tracking-tight text-lg">
                  {item.title}
                  {item.meta && (
                    <span className="ml-2 text-xs text-slate-400 font-normal">
                      {item.meta}
                    </span>
                  )}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light font-sans">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Tags & CTA Footer */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-50">
              <div className="flex items-center gap-2">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[10px] font-medium rounded-lg bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="text-xs font-semibold text-[#4330A3] group-hover:text-[#18A6D9] transition-colors flex items-center gap-1">
                {item.cta || "Explore"} <span>→</span>
              </span>
            </div>
          </div>

          {/* Accent border sweep */}
          <div
            className={cn(
              "absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-[#18A6D9]/20 to-transparent transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          />
        </div>
      ))}
    </div>
  );
}
