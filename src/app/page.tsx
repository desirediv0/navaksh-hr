"use client";

import Hero from "@/components/Hero";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import ProcessTimeline from "@/components/ProcessTimeline";
import AnimatedButton from "@/components/AnimatedButton";
import AboutSection from "@/components/AboutSection";
import {
  ShieldCheck,
  Building2, Globe, HeartHandshake,
  Factory, Stethoscope, Laptop,
  ShoppingBag, Truck, Clock,
  UserCheck
} from "lucide-react";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

/* ─────────────── DATA ─────────────── */

const services = [
  { title: "Manpower Outsourcing", description: "Complete operational management of your outsourced workforce and personnel operations.", icon: <Building2 className="w-5 h-5" />, image: "/manpower-solutions.jpg" },
  { title: "Transport Management", description: "Comprehensive logistics, routing, and fleet deployment coordination.", icon: <Truck className="w-5 h-5" />, image: "/logistics.jpg" },
  { title: "HR Recruitment", description: "Strategic permanent recruitment, contract staffing, and talent acquisition drives.", icon: <UserCheck className="w-5 h-5" />, image: "/recruitment-solutions.jpg" },
  { title: "Facility Management", description: "SLA-backed facilities maintenance, security, housekeeping, and industrial support.", icon: <ShieldCheck className="w-5 h-5" />, image: "/manufacturing.jpg" },
];

const whyChooseUs: BentoItem[] = [
  {
    title: "20+ Years Experience",
    description: "Two decades of seasoned expertise in recruitment, staffing, and compliance management.",
    icon: <Clock className="w-6 h-6 text-[#18A6D9]" />,
    status: "Proven",
    tags: ["Experience", "Leadership"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Compliance Focused",
    description: "100% adherence to labor laws, regulatory standards, and corporate compliance mandates.",
    icon: <ShieldCheck className="w-6 h-6 text-[#18A6D9]" />,
    status: "Certified",
    tags: ["Compliance", "Audits"],
  },
  {
    title: "Pan India Solutions",
    description: "A robust national recruitment network supporting workforce deployment in any region.",
    icon: <Globe className="w-6 h-6 text-[#18A6D9]" />,
    status: "National",
    tags: ["Scale", "Network"],
  },
  {
    title: "Dedicated Client Support",
    description: "A highly responsive customer success team delivering operational excellence and real-time query resolution.",
    icon: <HeartHandshake className="w-6 h-6 text-[#18A6D9]" />,
    status: "24/7 Support",
    tags: ["SLA", "Client-First"],
    colSpan: 2,
  },
];

const industries = [
  { title: "Manufacturing", icon: <Factory className="w-6 h-6" />, image: "/manufacturing.jpg" },
  { title: "Warehousing", icon: <Building2 className="w-6 h-6" />, image: "/construction.jpg" },
  { title: "Logistics", icon: <Truck className="w-6 h-6" />, image: "/logistics.jpg" },
  { title: "Retail", icon: <ShoppingBag className="w-6 h-6" />, image: "/retail.jpg" },
  { title: "Healthcare", icon: <Stethoscope className="w-6 h-6" />, image: "/healthcare.jpg" },
  { title: "FMCG", icon: <Factory className="w-6 h-6" />, image: "/manufacturing.jpg" },
  { title: "BPO", icon: <Globe className="w-6 h-6" />, image: "/bpo-services.jpg" },
  { title: "IT & Technology", icon: <Laptop className="w-6 h-6" />, image: "/it-technology.jpg" },
];

const founders = [
  {
    name: "Himanshu Rai",
    role: "Founder & Managing Director",
    qualification: "MBA (International Business Management)",
    experience: "20+ Years of Experience",
    bio: "Himanshu Rai is the Founder and Managing Director of Navaksh HR Management Private Limited, bringing over 20 years of extensive experience in Human Resources, Recruitment, Workforce Management, Payroll Administration, Compliance Management, Business Development, and Operations.",
    highlights: "He has successfully led HR and administration functions across reputed organizations including Passion HR Services Pvt. Ltd., Watermelon Management Services Ltd., Million Minds Management Services Ltd., DTDC Institute of Supply Chain Management, T2P Consultants Ltd., and DTDC Courier & Cargo Ltd. His expertise spans talent acquisition, client relationship management, workforce planning, compliance, payroll management, training & development, MIS reporting, and business operations. With strong leadership and strategic management capabilities, he has played a key role in building scalable workforce solutions and delivering exceptional value to clients across multiple industries.",
    previous: [
      "Passion HR Services Pvt. Ltd.",
      "Watermelon Management Services Ltd.",
      "Million Minds Management Services Ltd.",
      "DTDC Institute of Supply Chain Management",
      "T2P Consultants Ltd.",
      "DTDC Courier & Cargo Ltd."
    ]
  },
  {
    name: "Om Shankar Mehta",
    role: "Co-Founder & Director",
    qualification: "Graduate",
    experience: "20+ Years of Experience",
    bio: "Om Shankar Mehta is the Co-Founder and Director of Navaksh HR Management Private Limited with over 20 years of professional experience in workforce management, business operations, client servicing, manpower deployment, and organizational administration.",
    highlights: "He has successfully led HR and administration functions across reputed organizations including Passion HR Services Pvt. Ltd., Ecom Express Limited and DTDC Courier & Cargo Ltd. He has significant expertise in managing large-scale operations, developing client relationships, coordinating workforce solutions, and ensuring efficient business execution.",
    previous: [
      "Passion HR Services Pvt. Ltd.",
      "Ecom Express Limited",
      "DTDC Courier & Cargo Ltd."
    ]
  }
];



const faqs = [
  { question: "What services does Navaksh HR Management Pvt. Ltd. offer?", answer: "We offer end-to-end workforce solutions including Permanent Staffing, Contract Staffing, Labour Manpower Services, Payroll Management, Recruitment Solutions, HR Consulting, Manpower Outsourcing, and BPO Services." },
  { question: "How does Navaksh ensure regulatory compliance?", answer: "Compliance is at the core of our operations. We strictly adhere to EPF, ESIC, labor laws, factory acts, and all state-specific guidelines, providing regular audit reports to our corporate clients." },
  { question: "Do you support PAN India hiring?", answer: "Yes, Navaksh has a comprehensive recruitment and support network across all major tier-1, tier-2, and tier-3 cities in India, allowing us to deploy local and migrated workforce seamlessly." },
  { question: "How fast can you fulfill a staffing requirement?", answer: "For general labor or contract staffing, we can begin deployment within 48 to 72 hours. For executive search and niche technology positions, our structured assessment takes about 1 to 2 weeks." }
];

const testimonials = [
  {
    content: "Navaksh HR Management Pvt. Ltd. has been our staffing partner for over three years. Their compliance standards and turnaround times are exemplary.",
    author: "Rajesh Sharma",
    role: "VP of Operations",
    company: "Apex Manufacturing",
    rating: 5,
  },
  {
    content: "Their payroll automated process saved us countless administrative hours. Extremely professional and fully regulatory compliant.",
    author: "Anjali Gupta",
    role: "HR Director",
    company: "Logistics India",
    rating: 5,
  },
  {
    content: "Excellent contract staffing services during our seasonal peak operations. Fulfillments were quick, verified, and fully managed.",
    author: "Vikram Malhotra",
    role: "Warehouse Head",
    company: "Standard FMCG",
    rating: 5,
  },
];

/* ─────────────── PAGE ─────────────── */

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />

      {/* ════ TRUSTED BY ════ */}
      <section className="relative bg-white py-14 md:py-16  overflow-hidden border-b border-slate-100">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] tracking-tight mb-3">
              Trusted By Businesses Across India
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              Helping companies build, manage and scale high-performing workforces.
            </p>
          </div>
        </div>

        {/* Continuous moving logo strip */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Fade effect on edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 lg:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 lg:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee gap-8 flex">
            {/* Set 1 */}
            {["Manufacturing", "Logistics", "Warehousing", "Retail", "Healthcare", "FMCG", "BPO", "IT"].map((brand, idx) => (
              <div
                key={idx}
                className="text-sm font-semibold tracking-wider text-slate-400 hover:text-[#18A6D9] uppercase transition-colors select-none font-sans px-8 py-5 border border-slate-100 rounded-xl bg-slate-50/50 min-w-[220px] text-center shadow-sm flex items-center justify-center cursor-default hover:border-slate-200"
              >
                {brand}
              </div>
            ))}
            {/* Set 2 */}
            {["Manufacturing", "Logistics", "Warehousing", "Retail", "Healthcare", "FMCG", "BPO", "IT"].map((brand, idx) => (
              <div
                key={`dup-${idx}`}
                className="text-sm font-semibold tracking-wider text-slate-400 hover:text-[#18A6D9] uppercase transition-colors select-none font-sans px-8 py-5 border border-slate-100 rounded-xl bg-slate-50/50 min-w-[220px] text-center shadow-sm flex items-center justify-center cursor-default hover:border-slate-200"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ ABOUT PREVIEW ════ */}
      <AboutSection isHomePage />

      {/* ════ SERVICES GRID ════ */}
      <section className="py-14 md:py-16 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[#18A6D9]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          <SectionHeading
            badge="Our Services"
            title={<>Everything Your <span className="text-brand-primary">Enterprise Needs</span></>}
            subtitle="Comprehensive workforce, recruitment, payroll and compliance solutions built around your business goals."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* ════ WHY CHOOSE US ════ */}
      <section className="py-14 md:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
          <SectionHeading
            badge="Why Navaksh"
            title={<>Always Ready For <span className="text-brand-primary">Workforce Excellence</span></>}
            subtitle="Our systems are designed around scale, regulatory compliance, and speed of delivery."
          />

          <BentoGrid items={whyChooseUs} />
        </div>
      </section>

      {/* ════ PROCESS TIMELINE ════ */}
      <section className="py-14 md:py-16 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
          <SectionHeading
            badge="Our Methodology"
            title={<>Our <span className="text-brand-primary">Staffing &amp; Deployment</span> Process</>}
            subtitle="A structured, compliance-driven framework to deploy workforce flawlessly at scale."
          />
          <div className="mt-16">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* ════ INDUSTRIES ════ */}
      <section className="py-14 md:py-16 bg-brand-dark relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <SectionHeading
              badge="Sectors We Service"
              title={<>Industries <span className="text-brand-primary">We Empower</span></>}
              alignment="left" light rule
            />
            <div className="pb-1 flex-shrink-0">
              <AnimatedButton href="/industries" variant="outline-white" size="md">View All Industries</AnimatedButton>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <IndustryCard
                key={ind.title}
                title={ind.title}
                icon={ind.icon}
                image={ind.image}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════ LEADERSHIP SECTION ════ */}
      <section className="py-14 md:py-16  bg-gray-50/50 border-t border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="mt-12 gap-8 sm:grid sm:grid-cols-[1.5fr_2fr] items-end pb-8 border-b border-slate-200">
            <div>
              <span className="text-[#18A6D9] text-xs font-bold tracking-[0.25em] uppercase block mb-3">Leadership</span>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0F172A] tracking-tight leading-none">
                Our Board of Directors
              </h2>
            </div>
            <div className="mt-4 sm:mt-0">
              <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed">
                Two decades of corporate excellence guiding recruitment, staffing, and payroll administration across India. Meeting our clients&apos; requirements with compliance-first operational integrity.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 max-w-4xl mx-auto">
              {founders.map((member, index) => (
                <div key={index} className="group overflow-hidden bg-white border border-slate-200/80 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                  {/* Grayscale hover to color image */}
                  <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-slate-100 mb-4">
                    <Image
                      src={index === 0 ? "/himanshu.jpg" : "/om-shankar.jpg"}
                      alt={member.name}
                      fill
                      className="object-cover object-center grayscale hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-[#0F172A]/10 group-hover:bg-transparent transition-colors duration-300" />
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
                      {member.qualification} · {member.experience}
                    </p>

                    <p className="text-xs text-slate-500 leading-relaxed font-light font-sans mb-4">
                      {member.bio}
                    </p>

                    <div className="border-t border-slate-100 pt-4">
                      <span className="text-[9px] font-bold tracking-wider text-[#4330A3] uppercase block mb-3">
                        Previous Leadership
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {member.previous.map(org => (
                          <span key={org} className="px-2.5 py-1 bg-slate-50 border border-slate-200/60 text-[10px] text-slate-500 rounded-md font-sans hover:border-[#18A6D9] transition-colors cursor-default">
                            {org}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ TESTIMONIALS SECTION ════ */}
      <section className="py-14 md:py-16 bg-[#F8FAFC] relative overflow-hidden border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
          <SectionHeading
            badge="Client Reviews"
            title={<>What Our <span className="text-brand-primary">Partners Say</span></>}
            subtitle="We help organizations across India build productive workforce ecosystems."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-16">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200/80 rounded-xl px-6 py-6 shadow-sm hover:shadow-md hover:border-[#18A6D9]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <p className="text-slate-600 text-sm leading-relaxed font-light font-sans italic">
                  &ldquo;{test.content}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-100/60">
                  <Avatar className="size-8">
                    <AvatarImage
                      src={index === 0 ? "https://avatars.githubusercontent.com/u/47919550?v=4" : index === 1 ? "https://avatars.githubusercontent.com/u/68236786?v=4" : "https://avatars.githubusercontent.com/u/99137927?v=4"}
                      alt={test.author}
                    />
                    <AvatarFallback>{test.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="text-slate-800 text-sm font-bold truncate">{test.author}</div>
                    <div className="text-slate-400 text-xs truncate mt-0.5">
                      {test.role} · <span className="text-[#18A6D9] font-medium">{test.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <section className="py-14 md:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-[40%_55%] gap-16 items-start">
            <div>
              <SectionHeading
                badge="Clear Answers"
                title={<>Frequently Asked Questions</>}
                subtitle="Find details about our operational capabilities, compliance frameworks, and turnaround times."
                alignment="left" rule
              />
              <div className="p-8 border border-slate-100 bg-[#F8FAFC] rounded-2xl mt-8 shadow-sm">
                <p className="font-bold text-[#0F172A] text-xl mb-3">Still have questions?</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-sans font-light">Get in touch directly with our consultants for workforce consultation.</p>
                <AnimatedButton href="/contact" variant="primary" size="md">Contact Support Team</AnimatedButton>
              </div>
            </div>

            <div className="w-full">
              <FAQ items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}