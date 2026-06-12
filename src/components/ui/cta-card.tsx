import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: React.ReactNode;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  ({ className, imageSrc, imageAlt, title, subtitle, description, buttonText, onButtonClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-xl border border-slate-200/80 bg-white text-slate-800 shadow-xl flex flex-col md:flex-row max-w-5xl mx-auto",
          className
        )}
        {...props}
      >
        {/* Image Section */}
        <div className="relative md:w-1/3 w-full h-56 md:h-auto min-h-[220px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-w-7xl) 30vw, 50vw"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 w-full p-8 md:p-10 flex flex-col justify-center text-left">
          <div>
            <p className="text-xs font-bold text-[#18A6D9] uppercase tracking-wider">{title}</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-[#0F172A]">
              {subtitle}
            </h2>
            <p className="mt-4 text-slate-500 font-light font-sans text-sm md:text-base leading-relaxed">
              {description}
            </p>
            <div className="mt-6">
              <button
                onClick={onButtonClick}
                className="inline-flex items-center justify-center text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-[2px]"
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
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
CtaCard.displayName = "CtaCard";

export { CtaCard };
