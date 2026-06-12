"use client";

import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import AnimatedButton from "@/components/AnimatedButton";
import {
  Factory,
  Stethoscope,
  Laptop,
  ShoppingBag,
  Truck,
  Building2,
  Globe,
  CheckCircle2,
  TrendingUp,
  Users,
  AlertCircle,
  Compass,
} from "lucide-react";
import CTASection from "@/components/CTASection";

const industriesData = [
  {
    title: "Manufacturing",
    icon: Factory,
    image: "/manufacturing.jpg",
    challenges: "High absenteeism during harvest seasons, skill mismatches, safety compliance penalties, labor unions management.",
    solutions: "We deploy qualified technical operators and supervisors, implement safety training inductions, and handle 100% compliance documentation.",
    benefits: "Reduced machine downtime, guaranteed compliance audits, streamlined union communication.",
  },
  {
    title: "Logistics",
    icon: Truck,
    image: "/logistics.jpg",
    challenges: "High staff turnover, driver availability, 24/7 night shift scheduling issues, delivery hubs bottlenecking.",
    solutions: "Pre-screened pools of drivers, loaders, and delivery executives. Custom automated roster management and replacement guarantees.",
    benefits: "98% roster fulfillment rates, faster delivery times, lower administrative cost per delivery associate.",
  },
  {
    title: "Warehousing",
    icon: Building2,
    image: "/construction.jpg",
    challenges: "Sudden seasonal volume surges, packing errors, inventory scanning discrepancies, peak-season scaling delays.",
    solutions: "Dedicated contract workforce pools for picker, packer, and billing roles. On-site supervisors to manage shifts.",
    benefits: "Scale workforce up/down within 48 hours, reduced packaging error rate, clear SLA performance tracking.",
  },
  {
    title: "Retail",
    icon: ShoppingBag,
    image: "/retail.jpg",
    challenges: "Seasonal shopping peaks, high front-desk turnover, customer service training costs.",
    solutions: "Pre-trained customer service associates, cashiers, and store promoters deployed on flexible contracts.",
    benefits: "Enhanced store customer satisfaction rates, lower hiring costs, front-line staffing consistency.",
  },
  {
    title: "Healthcare",
    icon: Stethoscope,
    image: "/healthcare.jpg",
    challenges: "Critical background verification needs, high nurse and admin staff turnover, medical compliance policies.",
    solutions: "Comprehensive background checks, verified clinical staff, and administrative assistant deployment.",
    benefits: "Strict regulatory alignment, pre-verified personnel database, fast shift replacement.",
  },
  {
    title: "FMCG",
    icon: Factory,
    image: "/manpower-solutions.jpg",
    challenges: "Distribution network delays, assembly line bottlenecks, packaging raw material wastage.",
    solutions: "Skilled operators for packaging, assembly, distribution support and logistics tracking.",
    benefits: "Optimized operational costs, improved assembly line speeds, lower packaging wastage rates.",
  },
  {
    title: "E-Commerce",
    icon: ShoppingBag,
    image: "/providing-services.jpg",
    challenges: "Massive scaling requirements during mega sales, last-mile delivery workforce shortages.",
    solutions: "Fulfillment center associate pools, delivery associate networks, 24/7 operation coordination.",
    benefits: "SLA-backed scale on peak sales days, lower cost-to-deliver, zero last-mile bottlenecks.",
  },
  {
    title: "BPO",
    icon: Globe,
    image: "/bpo-services.jpg",
    challenges: "Extremely high agent attrition rates, night-shift staffing shortages, call performance metrics.",
    solutions: "Pre-screened caller talent database, specialized calling pods, rapid recruitment cycle.",
    benefits: "30% reduction in agent attrition, 24-hour back-office shift filling, SLA assurance.",
  },
  {
    title: "IT & Technology",
    icon: Laptop,
    image: "/it-technology.jpg",
    challenges: "Niche developer talent availability, long hiring cycles, project-specific contractor needs.",
    solutions: "Specialist technology recruiter pod, contract-to-hire developers, candidate screening audits.",
    benefits: "Shortlisted candidates within 48 hours, verified technical capabilities, lower hiring friction.",
  },
];

const expertisePoints = [
  "Roster management backed by direct on-site supervisors",
  "Pre-verified talent pools mapped by regional hubs",
  "Strict alignment with state-specific factory and labor acts",
  "24/7 customer success support for high-volume sectors",
];

const heroStats = [
  { value: "9+", label: "Sectors Served", icon: Globe },
  { value: "500+", label: "Clients Served", icon: Users },
  { value: "PAN India", label: "Operations", icon: TrendingUp },
];

export default function IndustriesPage() {
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
          <div className="max-w-3xl">
            <span className="text-[#18A6D9] text-xs font-bold tracking-[0.28em] uppercase block mb-4">
              SECTORS WE SERVICE
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
              Industry Specific{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#18A6D9] to-white">
                Workforce Solutions
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-14 font-light">
              We deploy custom sector-specific staffing structures, managing shift rosters, statutory audits, and on-site workforce coordination for leading brands across India.
            </p>

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-0 border border-white/10 rounded-2xl bg-white/5 shadow-sm overflow-hidden">
              {heroStats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-4 px-6 py-5 border-r border-white/10 last:border-r-0">
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-[#18A6D9] flex items-center justify-center flex-shrink-0 border border-white/10">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-xl leading-none mb-0.5">{value}</div>
                    <div className="text-[9px] font-semibold text-white/40 uppercase tracking-wider">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════ DETAILED SECTOR BLOCKS ════ */}
      <section className="py-14 md:py-16  bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
          <SectionHeading
            badge="Solutions by Industry"
            title={<>Deep Sector Expertise, <span className="text-brand-primary">Compliance First</span></>}
            subtitle="Explore challenges, solutions, and benefits for each of the core sectors we empower."
          />

          <div className="space-y-20 mt-16">
            {industriesData.map((ind, index) => {
              const Icon = ind.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={ind.title}
                  className={`grid grid-cols-1 ${isEven
                      ? "lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_2.4fr]"
                      : "lg:grid-cols-[2fr_1fr] xl:grid-cols-[2.4fr_1fr]"
                    } gap-6 lg:gap-8 items-stretch p-6 md:p-8 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300`}
                >
                  {/* Left: Alternating Column 1 (Image & Title Panel) */}
                  <div className={`relative flex flex-col justify-between p-6 rounded-xl overflow-hidden min-h-[300px] text-white ${isEven ? 'lg:order-1' : 'lg:order-2 bg-slate-900'}`}>
                    {/* Background photo */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={ind.image}
                        alt={ind.title}
                        fill
                        className="object-cover"
                        sizes="(max-w-7xl) 30vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-[#0F172A]/85 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />
                    </div>

                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#18A6D9] border border-white/10 mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight mb-2">{ind.title}</h3>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        Custom staffing plans engineered around compliance and operational speed.
                      </p>
                    </div>

                    <div className="relative z-10 pt-4 mt-auto">
                      <AnimatedButton href="/contact" variant="outline-white" size="sm">
                        Discuss Roster
                      </AnimatedButton>
                    </div>
                  </div>

                  {/* Right: Alternating Column 2 (Challenges, Solutions, Benefits) */}
                  <div className={`flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-5 h-full">
                      {/* Challenges */}
                      <div className="p-6 bg-red-50/20 border-l-4 border-red-500 rounded-r-xl border border-y-slate-100 border-r-slate-100 flex flex-col shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                          <span className="text-[11px] font-bold tracking-wider text-red-600 uppercase font-sans">Sector Challenges</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed font-light font-sans flex-grow">{ind.challenges}</p>
                      </div>

                      {/* Solutions */}
                      <div className="p-6 bg-sky-50/20 border-l-4 border-[#18A6D9] rounded-r-xl border border-y-slate-100 border-r-slate-100 flex flex-col shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <Compass className="w-4 h-4 text-[#18A6D9] flex-shrink-0" />
                          <span className="text-[11px] font-bold tracking-wider text-[#18A6D9] uppercase font-sans">Navaksh Solutions</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed font-light font-sans flex-grow">{ind.solutions}</p>
                      </div>

                      {/* Benefits */}
                      <div className="p-6 bg-[#4330A3]/5 border-l-4 border-[#4330A3] rounded-r-xl border border-y-slate-100 border-r-slate-100 flex flex-col shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-4 h-4 text-[#4330A3] flex-shrink-0" />
                          <span className="text-[11px] font-bold tracking-wider text-[#4330A3] uppercase font-sans">Key Benefits</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed font-light font-sans flex-grow">{ind.benefits}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════ EXPERTISE SPLIT ════ */}
      <section className="py-14 md:py-16  bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <div>
              <SectionHeading
                badge="Specialized Pods"
                title={<>Sector Specific Operations <span className="text-brand-primary">Optimise Success</span></>}
                alignment="left"
              />

              <p className="text-slate-500 text-base leading-relaxed mb-8 mt-6 font-light font-sans">
                Unlike general agencies, Navaksh splits its operations into sector-specific client pods. Your service delivery manager is an industry specialist who knows the shift requirements, regulatory mandates, and average turnover patterns of your specific industry.
              </p>

              <ul className="divide-y divide-slate-100 mb-8">
                {expertisePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 py-4 group cursor-default">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#18A6D9]/10 text-[#18A6D9]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <AnimatedButton href="/contact" variant="primary" size="md">
                Get Roster Strategy Consultation
              </AnimatedButton>
            </div>

            {/* Visual Box */}
            <div className="p-8 rounded-2xl text-white relative overflow-hidden shadow-xl" style={{ backgroundColor: "#0F172A" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#18A6D9]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#18A6D9] border border-white/10">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-white">Workforce Quality Guarantee</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light font-sans">
                Every candidate we deploy undergoes statutory documentation checks, criminal records check (upon request), and background checks, saving client risk and ensuring legal compliance.
              </p>
              <div className="border-t border-white/10 pt-8">
                <span className="text-[10px] font-bold text-[#18A6D9] tracking-wider uppercase block mb-4">Service Deliverables</span>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="font-extrabold text-2xl text-white">2 Hrs</span>
                    <p className="text-slate-400 text-xs mt-1">Emergency escalation response</p>
                  </div>
                  <div>
                    <span className="font-extrabold text-3xl text-white">100%</span>
                    <p className="text-slate-400 text-xs mt-1">Statutory compliance audits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}