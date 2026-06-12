"use client";

import Image from "next/image";
import { MapPin, CheckCircle2 } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import {
  ContainerAnimated,
  ContainerStagger,
  GalleryGrid,
  GalleryGridCell,
} from "./ui/cta-section-with-gallery";

interface AboutSectionProps {
  isHomePage?: boolean;
}

const strengths = [
  "Strict Statutory & Labor compliance",
  "Tailored industry-specific screening",
  "Dedicated client success managers",
  "Scalable contract workforce pool",
  "Robust candidate verification process",
  "PAN India support networks",
];

const galleryImages = [
  "/about-section.jpg",
  "/home.jpg",
  "/manpower-solutions.jpg",
  "/it-technology.jpg",
];

export default function AboutSection({ isHomePage = false }: AboutSectionProps) {
  const badge = isHomePage ? "ABOUT NAVAKSH HR" : "COMPANY OVERVIEW";
  const title = isHomePage
    ? "Building Workforce Excellence Through Strategic HR Solutions"
    : "Workforce Strategy built on Twenty Years Expertise";
  const btnText = isHomePage ? "Learn More About Us" : "Schedule Consultation";
  const btnHref = isHomePage ? "/about" : "/contact";

  return (
    <section className="py-14 md:py-16  bg-[#F8FAFC] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#18A6D9]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-[#4330A3]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Visual Column: Asymmetric Gallery Grid */}
          <div className="w-full relative order-2 lg:order-1">
            <GalleryGrid>
              {galleryImages.map((imageUrl, index) => (
                <GalleryGridCell
                  index={index}
                  key={index}
                  className="relative overflow-hidden rounded-[20px] shadow-lg border border-white"
                >
                  <Image
                    src={imageUrl}
                    alt="Navaksh HR Services & Operations"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    sizes="(max-w-7xl) 25vw, 50vw"
                  />
                </GalleryGridCell>
              ))}
            </GalleryGrid>

            {/* Floating badges */}
            <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-slate-150 text-[#0F172A] z-20">
              <div className="text-[9px] font-bold tracking-wider text-slate-400 mb-1 uppercase">Fulfillment Rate</div>
              <div className="font-bold text-2xl text-[#4330A3] leading-none">100%</div>
            </div>
            <div className="absolute top-6 -left-4 bg-white flex items-center gap-2.5 px-4 py-2.5 rounded-xl shadow-md border border-slate-100 z-20">
              <MapPin className="w-4 h-4 text-[#18A6D9] flex-shrink-0" />
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Dwarka, New Delhi</span>
            </div>
          </div>

          {/* Copy Column with ContainerStagger and ContainerAnimated */}
          <ContainerStagger className="flex flex-col gap-6 order-1 lg:order-2">
            <div>
              <ContainerAnimated className="text-[#18A6D9] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
                {badge}
              </ContainerAnimated>
              <ContainerAnimated>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[1.2] font-bold text-[#0F172A] tracking-tight mb-4">
                  {title}
                </h2>
              </ContainerAnimated>
              <ContainerAnimated>
                <p className="text-slate-500 text-base leading-relaxed font-light font-sans">
                  Navaksh HR Management Pvt. Ltd. was incorporated to consolidate two decades of leadership experience in human resources, compliance auditing, operational management, and large-scale industrial staffing.
                </p>
              </ContainerAnimated>
              <ContainerAnimated>
                <p className="text-slate-500 text-sm leading-relaxed mt-3 font-light font-sans">
                  We manage staffing operations with high efficiency, taking on entire client personnel tasks from contract management to salary administration, labor compliance, and on-site workforce coordination.
                </p>
              </ContainerAnimated>
            </div>

            {/* Strengths checklist */}
            <ContainerAnimated className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 col-span-2">
                {strengths.map((s) => (
                  <div key={s} className="flex items-center gap-2.5 text-slate-600 font-medium text-xs font-sans">
                    <div className="w-5 h-5 rounded-full bg-[#18A6D9]/10 flex items-center justify-center text-[#18A6D9] flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </ContainerAnimated>

            <ContainerAnimated>
              <AnimatedButton href={btnHref} variant="primary" size="md">
                {btnText}
              </AnimatedButton>
            </ContainerAnimated>
          </ContainerStagger>

        </div>
      </div>
    </section>
  );
}
