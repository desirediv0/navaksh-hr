"use client";

import { useRouter } from "next/navigation";
import { CtaCard } from "@/components/ui/cta-card";

export default function CTASection() {
  const router = useRouter();

  return (
    <section className="py-16 md:py-14 md:py-16  bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        <CtaCard
          title="Trusted Staffing Partner"
          subtitle={
            <>
              Ready to Build{" "}
              <span className="text-[#4330A3]">Your Workforce?</span>
            </>
          }
          description="Partner with Navaksh HR Management Pvt. Ltd. to secure industry-leading talent and streamline operations — from first hire to large-scale workforce deployment."
          buttonText="Get Free Consultation"
          imageSrc="/providing-services.jpg"
          imageAlt="Workforce Excellence Team"
          onButtonClick={() => router.push("/contact")}
        />
      </div>
    </section>
  );
}