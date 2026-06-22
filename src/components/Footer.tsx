"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  { name: "Manpower Outsourcing", href: "/services#manpower-outsourcing" },
  { name: "Transport Management", href: "/services#transport-management" },
  { name: "HR Recruitment", href: "/services#hr-recruitment" },
  { name: "Facility Management", href: "/services#facility-management" },
];

const socials = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com", label: "LinkedIn", color: "#0077B5" },
  { icon: FaFacebookF, href: "https://www.facebook.com", label: "Facebook", color: "#1877F2" },
  { icon: FaWhatsapp, href: "https://wa.me/919999720819", label: "WhatsApp", color: "#25D366" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-white overflow-hidden font-sans border-t border-slate-800" style={{ backgroundColor: "#0F172A" }}>


      {/* ── MAIN FOOTER (py-20) ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* COLUMN 1: BRAND LOGO, DESCRIPTION & SOCIALS */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <Image
                src="/logo.png"
                alt="Navaksh HR Logo"
                width={200}
                height={42}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Navaksh HR Management Pvt. Ltd. delivers workforce management, staffing, recruitment, payroll and outsourcing solutions across India.
            </p>
            {/* Social Icons with Premium Hover Animations */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-700 text-slate-400 hover:text-white transition-all duration-300"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = social.color;
                      e.currentTarget.style.backgroundColor = social.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "";
                      e.currentTarget.style.backgroundColor = "";
                    }}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="flex flex-col gap-6 lg:pl-8">
            <h3 className="text-white font-semibold text-base tracking-wide relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#18A6D9]">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#18A6D9] text-[15px] font-light transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-base tracking-wide relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#18A6D9]">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-[#18A6D9] text-[15px] font-light transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFORMATION */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-base tracking-wide relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#18A6D9]">
              Contact Info
            </h3>
            <ul className="flex flex-col gap-4 text-[15px] font-light text-slate-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#18A6D9] flex-shrink-0 mt-0.5" />
                <a href="tel:+919999720819" className="hover:text-[#18A6D9] transition-colors">
                  +91 9999720819
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#18A6D9] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1.5 break-all">
                  <a href="mailto:himanshurai@navakshhr.com" className="hover:text-[#18A6D9] transition-colors">
                    himanshurai@navakshhr.com
                  </a>
                  <a href="mailto:omshankar@navakshhr.com" className="hover:text-[#18A6D9] transition-colors">
                    omshankar@navakshhr.com
                  </a>
                  <a href="mailto:info@navakshhr.com" className="hover:text-[#18A6D9] transition-colors">
                    info@navakshhr.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#18A6D9] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider block mb-0.5">Corporate Office</span>
                    <span className="text-sm">
                      Office No UG 31, Upper Ground Floor,<br />
                      Suneja Tower 2, District Centre Janakpuri,<br />
                      New Delhi - 110058
                    </span>
                  </div>
                  <div className="border-t border-slate-800/80 pt-2">
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider block mb-0.5">Registered Office</span>
                    <span className="text-sm">
                      441 Ground Floor, Adarsh Apartment,<br />
                      Pocket-16, Sector-3, Dwarka,<br />
                      New Delhi – 110075
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-slate-500">
          <p>© {currentYear} Navaksh HR Management Pvt. Ltd. All Rights Reserved.</p>

        </div>
      </div>
    </footer>
  );
}