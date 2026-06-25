"use client";

import Image from "next/image";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import AboutSection from "@/components/AboutSection";
import {
  Target,
  Award,
  Shield,
  Users,
  Globe,
  Briefcase,
} from "lucide-react";

const values = [
  {
    icon: Target,
    number: "01",
    title: "Precision",
    desc: "We align talent with corporate requirements using scientific assessment, reducing turnaround and operational mismatch.",
  },
  {
    icon: Award,
    number: "02",
    title: "Excellence",
    desc: "We deliver executive-grade consultancy and premium client service across labor, staffing, and compliance.",
  },
  {
    icon: Shield,
    number: "03",
    title: "Integrity & Compliance",
    desc: "100% compliance transparency, safeguarding client operations against labor-related regulatory bottlenecks.",
  },
];

const milestones = [
  { year: "2006", event: "Founders entered the workforce operations and Courier Logistics sectors, managing massive teams." },
  { year: "2017", event: "Expanded operations into executive recruitment, Passion HR Services, and corporate consulting." },
  { year: "2021", event: "Reached major milestone of managing 5,000+ outsourced personnel warehousing and BPOs." },
  { year: "2025", event: "Incorporated Navaksh HR Management Pvt. Ltd., consolidating two decades of workforce excellence." },
  { year: "2026", event: "Recognized as India's trusted workforce partner managing 10,000+ associates and 500+ client locations." },
];

const keyStats = [
  { value: "20+ Years", label: "Experience", icon: Award },
  { value: "500+", label: "Clients Served", icon: Users },
  { value: "10k+", label: "Workforce Managed", icon: Briefcase },
  { value: "PAN India", label: "Operations", icon: Globe },
];

const leaders = [
  {
    name: "Himanshu Rai",
    role: "Founder & Managing Director",
    qual: "MBA (International Business Management)",
    experience: "20+ Years of Experience",
    bio: (
      <>
        Himanshu Rai is the Founder and Managing Director of Navaksh HR Management Private Limited and{" "}
        <a
          href="https://passionhr.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#18A6D9] hover:underline font-semibold"
        >
          Passion HR Services Pvt. Ltd.
        </a>
        , bringing over 20 years of extensive experience in Human Resources, Recruitment, Workforce Management, Payroll Administration, Compliance Management, Business Development, and Operations.
      </>
    ),
    highlights: "He has successfully led HR and administration functions across reputed organizations including Passion HR Services Pvt. Ltd., Watermelon Management Services Ltd., Million Minds Management Services Ltd., DTDC Institute of Supply Chain Management, T2P Consultants Ltd., and DTDC Courier & Cargo Ltd. His expertise spans talent acquisition, client relationship management, workforce planning, compliance, payroll management, training & development, MIS reporting, and business operations. With strong leadership and strategic management capabilities, he has played a key role in building scalable workforce solutions and delivering exceptional value to clients across multiple industries.",
  },
  {
    name: "Om Shankar Mehta",
    role: "Co-Founder & Director",
    qual: "Graduate",
    experience: "20+ Years of Experience",
    bio: "Om Shankar Mehta is the Co-Founder and Director of Navaksh HR Management Private Limited with over 20 years of professional experience in workforce management, business operations, client servicing, manpower deployment, and organizational administration.",
    highlights: "He has successfully led HR and administration functions across reputed organizations including Passion HR Services Pvt. Ltd., Ecom Express Limited and DTDC Courier & Cargo Ltd. He has significant expertise in managing large-scale operations, developing client relationships, coordinating workforce solutions, and ensuring efficient business execution.",
  }
];

export default function AboutPage() {
  return (
    <div className="font-sans">
      {/* ════ HERO BANNER ════ */}
      <div
        className="relative overflow-hidden py-14 md:py-16  md:py-32 flex items-center bg-[#0F172A]"
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
        >
          <Image
            src="/home.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-transparent" />
        </div>
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-bl from-[#18A6D9]/10 to-transparent blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 w-full">
          <div className="max-w-3xl">
            <span className="text-[#18A6D9] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
              ABOUT NAVAKSH HR
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
              India&apos;s Trusted
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#18A6D9] to-white">
                Workforce Partner
              </span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12 font-light">
              Always Ready For Workforce Excellence. Consolidated over two decades of founders&apos; leadership expertise to deliver compliance-first staffing, payroll administration, and recruitment solutions.
            </p>
          </div>
        </div>
      </div>

      {/* ════ STATISTICS STRIP ════ */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {keyStats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#4330A3] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-[#0F172A] text-xl lg:text-2xl leading-none mb-1">{value}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ COMPANY OVERVIEW ════ */}
      <AboutSection />

      {/* ════ WORKFORCE OPERATIONS SECTION ════ */}
      <section className="py-14 md:py-16  bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy Column */}
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              <div>
                <span className="text-[#18A6D9] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
                  WORKFORCE OPERATIONS
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[1.2] font-bold text-[#0F172A] tracking-tight mb-4">
                  National Mobilization &amp; Roster Compliance
                </h2>
                <p className="text-slate-500 text-base leading-relaxed font-light font-sans">
                  Our operations team manages a large database of active, skilled operators, warehousing pickers, logistics drivers, and BPO associates. We maintain deployment speed with automated roster systems.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mt-3 font-light font-sans">
                  Every deployed resource passes a rigorous background and medical verification check. Our on-site supervisors streamline workforce management, minimizing operational bottlenecks.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                <div>
                  <div className="text-2xl font-bold text-[#4330A3]">10K+</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Active Associates</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#4330A3]">500+</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Locations Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#4330A3]">48 hrs</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Scaling Speed</div>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[480px] order-1 lg:order-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/contractual-services.jpg"
                  alt="Workforce Operations"
                  fill
                  className="object-cover"
                  sizes="(max-w-7xl) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ VISION & MISSION ════ */}
      <section className="py-14 md:py-16  bg-[#F8FAFC] relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#18A6D9] flex items-center justify-center mb-6">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Our Vision</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light font-sans">
                  To be India&apos;s leading workforce management company known for setting high compliance standards, deployment speed, and delivering exceptional value that transforms client business productivity.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#18A6D9] flex items-center justify-center mb-6">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Our Mission</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light font-sans">
                  To enable corporate organizations to focus on strategic operations by absorbing their recruitment, staffing, and compliance management burdens, ensuring a highly skilled workforce is always ready for operations.
                </p>
              </div>
            </div>

            {/* Visual Column */}
            <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/providing-services.jpg"
                alt="Corporate Mission and Vision"
                fill
                className="object-cover"
                sizes="(max-w-7xl) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════ CORE VALUES ════ */}
      <section className="py-14 md:py-16  bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
          <SectionHeading
            badge="Our Guiding Principles"
            title={<>Our Core <span className="text-brand-primary">Values</span></>}
            subtitle="The fundamental values guiding every client engagement and candidate selection."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {values.map(({ icon: Icon, number, title, desc }) => (
              <div
                key={title}
                className="group relative overflow-hidden flex flex-col p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#18A6D9] scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left" />

                <div className="absolute -bottom-4 -right-2 font-bold leading-none select-none pointer-events-none text-[#0F172A]/5 text-[100px]">
                  {number}
                </div>

                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 bg-slate-200/50 text-[#4330A3] group-hover:bg-[#4330A3] group-hover:text-white">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] mb-3 group-hover:text-[#4330A3] transition-colors">
                  {title}
                </h3>

                <p className="text-slate-500 text-xs md:text-sm leading-relaxed flex-grow font-light font-sans relative z-10">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ TIMELINE ════ */}
      <section className="py-14 md:py-16  bg-[#F8FAFC] relative overflow-hidden border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
            {/* Timeline Column */}
            <div>
              <SectionHeading
                badge="Our Journey"
                title={<>Key <span className="text-brand-primary">Milestones</span></>}
                subtitle="From industry sector beginnings to a consolidated HR management powerhouse."
                alignment="left"
                rule
              />

              <div className="grid gap-y-1 mt-12 font-sans">
                {milestones.map(({ year, event }) => (
                  <div key={year} className="flex gap-5 group pb-6 relative">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xs flex-shrink-0 transition-all duration-300 bg-slate-200 border border-slate-350 text-[#0F172A] group-hover:bg-[#18A6D9] group-hover:text-white">
                        <span>{year}</span>
                      </div>
                      <div
                        className="w-px flex-1 mt-2 bg-slate-200 group-last:hidden"
                        style={{ minHeight: "1.2rem" }}
                      />
                    </div>
                    <div className="pt-3 flex-1 min-w-0">
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed group-hover:text-[#4330A3] transition-colors duration-250 font-light font-sans">
                        {event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Column */}
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/industry-expertise.jpg"
                  alt="Enterprise Milestones Journey"
                  fill
                  className="object-cover"
                  sizes="(max-w-7xl) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ LEADERSHIP TEAM ════ */}
      <section className="py-14 md:py-16  bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          <SectionHeading
            badge="Leadership Team"
            title={<>Our Board of <span className="text-brand-primary">Directors</span></>}
            subtitle="Guiding Navaksh with regulatory integrity and two decades of field expertise."
          />



          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {leaders.map((member, index) => (
              <div key={member.name} className="group overflow-hidden bg-slate-50 border border-slate-200/60 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                {/* Color image */}
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-slate-200 mb-4">
                  <Image
                    src={index === 0 ? "/himanshu.jpg" : "/om-shankar.jpg"}
                    alt={member.name}
                    fill
                    className="object-cover object-center group-hover:scale-102 transition-all duration-500"
                  />
                </div>

                <div className="px-1 pt-2">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-[#0F172A] text-lg font-bold transition-all duration-300">
                      {member.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">_0{index + 1}</span>
                  </div>

                  <div className="text-xs font-semibold text-[#18A6D9] mb-3">
                    {member.role}
                  </div>

                  <p className="text-xs text-slate-400 font-medium font-sans mb-3">
                    {member.qual} · {member.experience}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed font-light font-sans mb-4">
                    {member.bio}
                  </p>

                  <div className="border-t border-slate-200/60 pt-4">
                    <p className="text-xs text-slate-500 leading-relaxed font-light font-sans">
                      {member.highlights}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}