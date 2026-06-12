"use client";

import { useRouter } from "next/navigation";
import { DicedHeroSection } from "@/components/ui/diced-hero-section";

export default function Hero() {
  const router = useRouter();

  const slides = [
    {
      title: "Corporate Staffing",
      image: "/home.jpg",
    },
    {
      title: "Recruitment Expertise",
      image: "/about-section.jpg",
    },
    {
      title: "Workforce Management",
      image: "/manpower-solutions.jpg",
    },
    {
      title: "IT & Technology Hiring",
      image: "/it-technology.jpg",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-16 lg:py-14 md:py-16 ">
      {/* Background radial gradients for luxury feel */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-[#18A6D9]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-[#4330A3]/10 to-transparent blur-[120px] pointer-events-none" />

      <DicedHeroSection
        topText="20+ Years Workforce Excellence"
        mainText="India's Trusted Workforce & Staffing Partner"
        subMainText="Delivering premium staffing, manpower outsourcing, payroll management and recruitment solutions across India."
        buttonText="Get Free Consultation"
        slides={slides}
        onMainButtonClick={() => router.push("/contact")}
        topTextStyle={{
          color: "#475569",
          fontSize: "0.875rem",
          fontWeight: "600",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          display: "block",
          marginBottom: "1rem",
        }}
        mainTextStyle={{
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          fontWeight: "800",
          gradient: "linear-gradient(135deg, #18A6D9, #4330A3)",
          lineHeight: "1.1",
        }}
        subMainTextStyle={{
          color: "#64748B",
          fontSize: "1.125rem",
          lineHeight: "1.6",
          marginTop: "1.5rem",
          marginBottom: "2rem",
          fontWeight: "300",
        }}
        buttonStyle={{
          backgroundColor: "#4330A3",
          color: "#ffffff",
          borderRadius: "14px",
          hoverColor: "#18A6D9",
          hoverForeground: "#ffffff",
        }}
        separatorColor="#18A6D9"
        maxContentWidth="1280px"
        fontFamily="var(--font-poppins), sans-serif"
      />
    </section>
  );
}