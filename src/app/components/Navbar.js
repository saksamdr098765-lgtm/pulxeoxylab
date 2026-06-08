"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaWhatsapp,
  FaCircle,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
        scrolled ? "bg-[#05070a]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT: Brand + live status */}
        <div className="flex items-center gap-4">

          <div className="text-cyan-400 font-semibold tracking-wide">
            PulseOxylabs
          </div>

          {/* LIVE STATUS (makes it feel “alive”) */}
          <div className="hidden md:flex items-center gap-2 text-xs text-gray-400">
            <FaCircle className="text-green-400 text-[8px] animate-pulse" />
            Lab systems active
          </div>

        </div>

        {/* CENTER NAV (minimal system links) */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">

          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Tests</a>
          <a href="#" className="hover:text-white transition">Packages</a>
          <a href="#" className="hover:text-white transition">Diagnostics</a>

        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden md:flex items-center gap-3">

          {/* Priority CTA */}
          <button className="bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-lg text-xs font-medium transition flex items-center gap-2">
            Book Test
          </button>

          {/* secondary actions */}
          <button className="border border-white/10 px-3 py-2 rounded-lg text-xs text-gray-300 hover:border-white/30 transition flex items-center gap-2">
            <FaPhoneAlt className="text-cyan-400" />
          </button>

          <button className="bg-green-500 hover:bg-green-600 text-black px-3 py-2 rounded-lg text-xs transition flex items-center gap-2">
            <FaWhatsapp />
          </button>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#05070a] border-t border-white/10"
          >
            <div className="px-6 py-5 flex flex-col gap-4 text-sm text-gray-300">

              <a href="#">Home</a>
              <a href="#">Tests</a>
              <a href="#">Packages</a>
              <a href="#">Diagnostics</a>

              {/* mobile CTA cluster */}
              <div className="pt-4 flex flex-col gap-3">

                <button className="bg-cyan-500 text-black px-4 py-2 rounded-lg flex items-center justify-center gap-2">
                  Book Test
                </button>

                <button className="border border-white/10 px-4 py-2 rounded-lg flex items-center justify-center gap-2">
                  <FaPhoneAlt className="text-cyan-400" />
                  Call Now
                </button>

                <button className="bg-green-500 text-black px-4 py-2 rounded-lg flex items-center justify-center gap-2">
                  <FaWhatsapp />
                  WhatsApp
                </button>

              </div>

              {/* tiny system note */}
              <p className="text-xs text-gray-600 pt-2">
                Fast reporting • Accurate diagnostics • Secure results
              </p>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}