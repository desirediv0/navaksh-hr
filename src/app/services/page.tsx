"use client";

import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import AnimatedButton from "@/components/AnimatedButton";
import {
  ShieldCheck,
  Building2,
  CheckCircle2,
  Zap,
  BarChart3,
  Lock,
  Truck,
  UserCheck,
} from "lucide-react";

const services = [
  {
    id: "manpower-outsourcing",
    title: "Manpower Outsourcing",
    overview: "Transferring the operational management of complete departments (sorting, packing, billing, logistics) under our direct supervision.",
    benefits: ["Outcome-driven workforce operations", "Reduced management bandwidth consumption", "Predictable pricing structures"],
    process: "SLA Definition → Operations Transfer → Workforce Allocation → Performance Management → Periodic Service Level Reviews",
    industries: "Warehousing, Logistics, Retail, BPO, Manufacturing",
    icon: Building2,
    image: "/manpower-solutions.jpg",
  },
  {
    id: "transport-management",
    title: "Transport Management",
    overview: "Comprehensive logistics, routing, fleet deployment, and end-to-end transport staff coordination.",
    benefits: ["Guaranteed roster compliance", "98% fleet utilization schedules", "Lower administrative transit overheads"],
    process: "Route Mapping → Roster Planning → Driver Verification & Safety Induction → Daily Dispatch Management → Fuel & SLA Reporting",
    industries: "Logistics, E-Commerce, Manufacturing, Warehousing",
    icon: Truck,
    image: "/logistics.jpg",
  },
  {
    id: "hr-recruitment",
    title: "HR Recruitment",
    overview: "Strategic permanent recruitment, contract staffing, executive headhunting, and volume hiring drives.",
    benefits: ["Rigorous multi-stage candidate assessment", "Pre-screened active caller & labor databases", "Low first-year associate attrition rates"],
    process: "Mandate Scoping → Talent Sourcing & Mapping → Structured Interviews → Background Verification → Placement & Onboarding",
    industries: "IT & Tech, Healthcare, Retail, FMCG, BPO",
    icon: UserCheck,
    image: "/recruitment-solutions.jpg",
  },
  {
    id: "facility-management",
    title: "Facility Management",
    overview: "SLA-backed facilities maintenance, corporate housekeeping, security, and industrial pantry support.",
    benefits: ["100% adherence to labor compliance & factory acts", "On-site associate supervision & safety audits", "High hygiene & housekeeping standards"],
    process: "Facility Scoping → Resource Allocation → Safety & Operational Inductions → Shift Management → Daily Quality Audits",
    industries: "Manufacturing, Retail, Corporate Offices, Warehousing",
    icon: ShieldCheck,
    image: "/manufacturing.jpg",
  },
];

const advantages = [
  {
    icon: BarChart3,
    number: "01",
    title: "Operational Cost Reduction",
    desc: "Transform fixed personnel management expenses into variable operational costs aligned with business volume.",
  },
  {
    icon: Lock,
    number: "02",
    title: "Regulatory Compliance Shield",
    desc: "We absorb labor auditing, PF/ESIC registration, legal filings, and payroll compliance risks.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Management Bandwidth Release",
    desc: "Free up your human resource teams to focus on corporate strategy while we manage the operational workforce.",
  },
];

export default function ServicesPage() {
  return (
    <div className="font-sans bg-white">
      {/* ════ HERO ════ */}
      <div
        className="relative overflow-hidden py-32 md:py-40"
        style={{ background: "linear-gradient(155deg, #0F172A 0%, #151e36 50%, #4330A3 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-bl from-[#18A6D9]/10 to-transparent blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#18A6D9] text-xs font-bold tracking-[0.28em] uppercase block mb-4">
              OUR CAPABILITIES
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
              Enterprise Grade{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#18A6D9] to-white">
                Workforce Services
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 font-light">
              Always Ready For Workforce Excellence. Fulfilling industrial staffing, payroll processing, and permanent recruitment requirements with corporate integrity.
            </p>
            <div className="inline-flex items-center gap-3 border border-white/10 px-5 py-2 rounded-full bg-white/5 shadow-sm">
              <span className="font-extrabold text-white text-base leading-none">{services.length}</span>
              <span className="w-px h-4 bg-white/15" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-white/40">Core Specializations</span>
            </div>
          </div>
        </div>
      </div>

      {/* ════ DETAILED ALTERNATING SERVICES ════ */}
      <section className="py-14 md:py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
          <SectionHeading
            badge="Solutions Portfolio"
            title={<>Tailored Solutions For <span className="text-brand-primary">Corporate Growth</span></>}
            subtitle="We handle complete candidate profiling, on-site management, payroll admin, and state compliance."
          />

          <div className="space-y-28 mt-20">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isEven = i % 2 === 0;

              return (
                <div
                  key={s.title}
                  id={s.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center border-b border-slate-100 pb-20 last:border-b-0 last:pb-0 scroll-mt-32"
                >
                  {/* Image Block */}
                  <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                    <div className="relative w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-white">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-102"
                        sizes="(max-w-7xl) 50vw, 100vw"
                      />
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#18A6D9]/10 text-[#18A6D9] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-3xl font-bold text-[#0F172A]">{s.title}</h3>
                    </div>

                    <p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">
                      {s.overview}
                    </p>

                    <div className="space-y-6 mb-8">
                      {/* Benefits */}
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#4330A3] block mb-3">Key Operational Benefits</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {s.benefits.map((b) => (
                            <div key={b} className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                              <CheckCircle2 className="w-4 h-4 text-[#18A6D9] flex-shrink-0" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Process */}
                      <div className="pt-4 border-t border-slate-200">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#4330A3] block mb-2">Process Workflow</span>
                        <p className="text-xs text-slate-400 leading-relaxed font-light">{s.process}</p>
                      </div>

                      {/* Industries */}
                      <div className="pt-4 border-t border-slate-200">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#4330A3] block mb-2">Industries Served</span>
                        <div className="flex flex-wrap gap-2">
                          {s.industries.split(", ").map((ind) => (
                            <span key={ind} className="px-3 py-1 bg-white border border-slate-100 text-slate-500 text-xs rounded-lg font-medium shadow-sm">
                              {ind}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <AnimatedButton href="/contact" variant="primary" size="md">
                        Request Consultation
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════ ADVANTAGES ════ */}
      <section
        className="py-14 md:py-16 relative overflow-hidden text-white"
        style={{ background: "linear-gradient(155deg, #0F172A 0%, #151e36 50%, #4330A3 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 xl:gap-24 items-center">
            {/* Left Advantages Column */}
            <div>
              <SectionHeading
                badge="The Navaksh Advantage"
                title={<>Why Businesses Partner <span className="text-brand-primary">With Us?</span></>}
                alignment="left"
                light
                rule
              />

              <div className="divide-y divide-white/[0.07] mt-12">
                {advantages.map(({ icon: Icon, number, title, desc }) => (
                  <div key={number} className="flex gap-6 py-8 group">
                    <div className="flex flex-col items-center gap-2.5 flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-brand-primary/10 border border-brand-primary/30 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-extrabold text-xs text-white/30">{number}</span>
                    </div>

                    <div className="flex-1 pt-1.5">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                        {title}
                      </h4>
                      <p className="text-white/50 text-sm leading-relaxed font-light">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Consultation Card */}
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-primary to-brand-secondary" />
              <div className="mb-8">
                <span className="text-[10px] font-bold tracking-wider text-brand-primary uppercase block mb-2">Free Consultation</span>
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">Need a Custom Staffing Solution?</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">Our corporate workforce advisors are standing by to review your requirements, design an SLA, and estimate budgets.</p>
              </div>

              <ul className="space-y-4 mb-8 text-sm text-white/50 font-light">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  Response within 2 business hours
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  Customized SLA design proposal
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  Full legal and compliance audit
                </li>
              </ul>

              <AnimatedButton href="/contact" variant="secondary" size="md" className="w-full justify-center">
                Schedule Consultation
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}