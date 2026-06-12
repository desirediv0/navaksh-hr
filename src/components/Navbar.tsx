"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  UserCheck,
  Building2,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

const servicesMegaMenu = [
  {
    name: "Manpower Outsourcing",
    desc: "Complete operational management of outsourced personnel.",
    href: "/services#manpower-outsourcing",
    icon: Building2,
  },
  {
    name: "Transport Management",
    desc: "Comprehensive logistics, routing, and fleet deployment.",
    href: "/services#transport-management",
    icon: Truck,
  },
  {
    name: "HR Recruitment",
    desc: "Permanent hiring, contract staffing, and talent acquisition.",
    href: "/services#hr-recruitment",
    icon: UserCheck,
  },
  {
    name: "Facility Management",
    desc: "Housekeeping, security, maintenance, and corporate facilities.",
    href: "/services#facility-management",
    icon: ShieldCheck,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Click outside to close mega menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ── TOP INFO BAR (40px) ── */}
      <div
        className="w-full h-10 text-white flex items-center justify-between px-6 lg:px-12 xl:px-16 text-xs font-normal border-b border-white/10 z-[51] relative transition-colors duration-300"
        style={{ backgroundColor: "#0F172A" }}
      >
        {/* Left Side: Phone, Email, Location */}
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth">
          <a
            href="tel:+919999720819"
            className="flex items-center gap-2 text-white/80 hover:text-[#18A6D9] transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#18A6D9]" />
            <span>+91 9999720819</span>
          </a>
          <span className="w-px h-3 bg-white/20 hidden sm:block" />
          <a
            href="mailto:info@navakshhr.com"
            className="flex items-center gap-2 text-white/80 hover:text-[#18A6D9] transition-colors whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5 text-[#18A6D9]" />
            <span>info@navakshhr.com</span>
          </a>
          <span className="w-px h-3 bg-white/20 hidden md:block" />
          <div className="hidden md:flex items-center gap-2 text-white/80 whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 text-[#18A6D9]" />
            <span>Dwarka, New Delhi</span>
          </div>
        </div>

        {/* Right Side: Working Hours (Desktop only) */}
        <div className="hidden lg:flex items-center gap-2 text-white/80 text-right">
          <span className="text-white/40 uppercase tracking-wider text-[10px] font-semibold">Working Hours:</span>
          <span>Mon-Sat 9:00 AM – 6:00 PM</span>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl bg-white/95 border-b border-slate-100 shadow-md top-0"
            : "bg-transparent border-b border-transparent top-10"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              "h-14 md:h-[64px] lg:h-[72px]" // Reduced height for professional corporate look
            )}
          >
            {/* LEFT SIDE: LOGO */}
            <Link href="/" className="flex items-center py-1 transition-transform duration-200 hover:opacity-90">
              <div className="relative flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Navaksh HR Logo"
                  width={250}
                  height={52}
                  priority
                  className="h-10 md:h-[46px] lg:h-[52px] w-auto object-contain"
                />
              </div>
            </Link>

            {/* CENTER MENU (Desktop/Tablet) */}
            <nav className="hidden md:flex items-center justify-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isServices = link.name === "Services";
                const active = pathname === link.href || (isServices && pathname.startsWith("/services"));

                if (isServices) {
                  return (
                    <div
                      key={link.name}
                      ref={megaMenuRef}
                      className="relative"
                      onMouseEnter={() => setMegaMenuOpen(true)}
                      onMouseLeave={() => setMegaMenuOpen(false)}
                    >
                      <button
                        className={cn(
                          "relative px-4 py-2 text-[15px] lg:text-base font-medium font-sans tracking-wide transition-all duration-200 flex items-center gap-1 focus:outline-none",
                          active ? "text-[#4330A3]" : "text-[#0F172A] hover:text-[#18A6D9]"
                        )}
                        onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={cn("w-4 h-4 transition-transform duration-250", megaMenuOpen && "rotate-180")} />
                        <span
                          className={cn(
                            "absolute bottom-0 left-4 right-4 h-0.5 bg-[#18A6D9] transition-all duration-300 rounded-full",
                            active ? "w-auto" : "w-0"
                          )}
                        />
                      </button>

                      {/* Premium Mega Menu Dropdown */}
                      <AnimatePresence>
                        {megaMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl p-6 grid grid-cols-2 gap-x-6 gap-y-4 mt-3 z-50 text-left"
                          >
                            {servicesMegaMenu.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => setMegaMenuOpen(false)}
                                  className="flex gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group text-left"
                                >
                                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-[#4330A3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#4330A3] group-hover:text-white transition-colors duration-200">
                                    <Icon className="w-4.5 h-4.5" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-semibold text-[#0F172A] group-hover:text-[#18A6D9] transition-colors duration-200 leading-snug">
                                      {item.name}
                                    </h4>
                                    <p className="text-xs text-slate-500 font-light mt-0.5 leading-relaxed">
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-[15px] lg:text-base font-medium font-sans tracking-wide transition-all duration-200 group flex flex-col items-center",
                      active ? "text-[#4330A3]" : "text-[#0F172A] hover:text-[#18A6D9]"
                    )}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span
                      className={cn(
                        "absolute bottom-0 h-0.5 bg-[#18A6D9] transition-all duration-300 rounded-full",
                        active ? "w-6" : "w-0 group-hover:w-4"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT SIDE: CTA (Desktop/Tablet) & HAMBURGER */}
            <div className="flex items-center gap-4">
              {/* Primary Consultation Button */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center justify-center text-white text-[15px] lg:text-base font-semibold font-sans px-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#4330A3",
                  height: "44px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#18A6D9";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#4330A3";
                }}
              >
                Get Consultation
              </Link>

              {/* Hamburger Button (Mobile) */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex items-center justify-center w-10 h-10 text-[#0F172A] hover:text-[#18A6D9] focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under the fixed header */}
      <div className="h-14 md:h-[64px] lg:h-[72px]" />

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-black md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Off-canvas Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[400px] bg-white z-[101] shadow-2xl flex flex-col md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-slate-100">
                <Image
                  src="/logo.png"
                  alt="Navaksh HR Logo"
                  width={180}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center text-[#0F172A] hover:text-[#18A6D9] focus:outline-none transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex-grow py-8 px-6 flex flex-col gap-6 overflow-y-auto">
                {navLinks.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      {link.name === "Services" ? (
                        <div className="flex flex-col gap-2">
                          <span className="block text-xl font-medium font-sans text-slate-400 py-1 uppercase tracking-wider text-xs">
                            Our Services
                          </span>
                          <div className="flex flex-col gap-3 pl-3 border-l border-slate-100">
                            {servicesMegaMenu.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-base font-normal text-[#0F172A] hover:text-[#18A6D9] py-1"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "block text-xl font-medium font-sans py-2 border-b border-slate-50 transition-colors",
                            active ? "text-[#4330A3]" : "text-[#0F172A] hover:text-[#18A6D9]"
                          )}
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer Footer CTA */}
              <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col gap-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center text-white text-base font-medium font-sans w-full rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                  style={{
                    backgroundColor: "#4330A3",
                    height: "48px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#18A6D9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#4330A3";
                  }}
                >
                  Get Consultation
                </Link>
                <div className="flex flex-col gap-2 text-xs text-[#0F172A]/70 text-center">
                  <p>+91 9999720819</p>
                  <p>info@navakshhr.com</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}