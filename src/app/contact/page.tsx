import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageSquare } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Navaksh HR Management Pvt. Ltd.",
  description: "Get in touch with Navaksh HR Management Pvt. Ltd. always ready for workforce excellence. Contact our Dwarka office for corporate consultation.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Corporate Office Address",
    lines: [
      "1109, 11th Floor, Kirti Shikhar Building,",
      "District Centre, Janakpuri,",
      "New Delhi - 110058"
    ],
    action: null,
  },
  {
    icon: MapPin,
    title: "Registered Office Address",
    lines: [
      "441 Ground Floor, Adarsh Apartment,",
      "Pocket-16 Sector-3, Dwarka,",
      "New Delhi – 110075"
    ],
    action: null,
  },
  {
    icon: Phone,
    title: "Direct Phone",
    lines: ["+91 9999720819"],
    action: "tel:+919999720819",
  },
  {
    icon: Mail,
    title: "Email Channels",
    lines: [
      "info@navakshhr.com",
      "himanshurai@navakshhr.com",
      "omshankar@navakshhr.com"
    ],
    action: "mailto:info@navakshhr.com",
  },
  {
    icon: Clock,
    title: "Operating Hours",
    lines: [
      "Mon – Sat: 9:00 AM – 6:30 PM",
      "Sunday: Closed"
    ],
    action: null,
  },
];

export default function ContactPage() {
  return (
    <div className="font-sans bg-white">
      {/* ════ HERO ════ */}
      <div
        className="relative overflow-hidden py-14 md:py-16  md:py-32"
        style={{ background: "linear-gradient(155deg, #0F172A 0%, #151e36 50%, #4330A3 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(24,166,217,0.14), transparent 62%)" }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: "linear-gradient(to right, #18A6D9, #4330A3)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 xl:px-16 pt-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[2px] bg-brand-primary" />
              <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-brand-primary">
                Reach Our Team
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8"
            >
              Let&apos;s Build Your
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(100deg, #18A6D9, #ffffff 50%, #4330A3)" }}
              >
                Ideal Workforce
              </span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-light">
              Always Ready For Workforce Excellence. Contact our Dwarka, New Delhi office today, and let&apos;s discuss custom recruitment, payroll management, and staffing options.
            </p>

            {/* Response guarantee */}
            <div
              className="inline-flex items-center gap-4 px-6 py-4 border border-white/10 rounded-2xl bg-white/5 font-sans"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-brand-primary/20 border border-brand-primary/40"
              >
                <MessageSquare className="w-4 h-4 text-brand-primary" />
              </div>
              <div>
                <div className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] mb-0.5">
                  Response SLA
                </div>
                <div className="text-white/75 text-sm">
                  We reply within{" "}
                  <span className="text-brand-primary font-bold">2 business hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════ MAIN CONTACT LAYOUT ════ */}
      <section className="py-14 md:py-16  md:py-32 relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-[45%_50%] gap-16 xl:gap-24 items-start">

            {/* LEFT SIDE: Contact Information Card */}
            <div>
              <SectionHeading
                badge="Corporate Address"
                title={
                  <>
                    Connect With Our{" "}
                    <span className="text-brand-primary">Workforce Specialists</span>
                  </>
                }
                alignment="left"
                rule
              />

              <div className="space-y-4 mb-12 mt-8">
                {contactInfo.map(({ icon: Icon, title, lines, action }) => {
                  const inner = (
                    <div
                      className="flex items-start gap-5 p-6 rounded-2xl bg-brand-light hover:border-brand-primary/20 hover:bg-white border border-brand-accent/50 transition-all duration-300 hover:shadow-premium"
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-brand-primary/10 border border-brand-primary/25 text-brand-primary group-hover:bg-brand-primary group-hover:text-white"
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-secondary mb-2">
                          {title}
                        </h4>
                        {lines.map((line, i) => (
                          <p key={i} className="text-brand-dark/70 text-[0.92rem] leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>

                      {action && (
                        <ArrowRight className="w-5 h-5 text-brand-dark/18 group-hover:text-brand-primary group-hover:translate-x-1 transition-all duration-250 flex-shrink-0 mt-3" />
                      )}
                    </div>
                  );

                  return action ? (
                    <a key={title} href={action} className="block group">
                      {inner}
                    </a>
                  ) : (
                    <div key={title}>{inner}</div>
                  );
                })}
              </div>

              {/* Google Map embed inside Info Card */}
              <div className="rounded-2xl overflow-hidden border border-brand-accent/50 h-[300px] relative shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9934988451877!2d77.0850239!3d28.6299839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bf46261f71%3A0xe54d3148cf491024!2sKirti%20Shikhar%20Building!5e0!3m2!1sen!2sin!4v1782120899878!5m2!1sen!2sin"
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale opacity-85"
                />
              </div>
            </div>

            {/* RIGHT SIDE: Premium Contact Form */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}