"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

const links = [
{ name: "Home", href: "/" },
{ name: "Services", href: "#services" },
{ name: "Packages", href: "#packages" },
{ name: "About", href: "#about" },
{ name: "Contact", href: "#contact" },
];

return ( <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md"> <div className="mx-auto max-w-7xl px-6"> <nav className="flex h-20 items-center justify-between">
{/* Logo */} <Link href="/" className="flex items-center gap-3"> <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-black text-white shadow-lg">
P </div>


        <div>
          <h1 className="text-xl font-black text-slate-900">
            Pulxeoxy Labs
          </h1>
          <p className="text-xs font-medium text-slate-500">
            Accurate • Reliable • Trusted
          </p>
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-10">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="relative font-medium text-slate-600 transition hover:text-blue-600"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex items-center gap-4">
        <a
          href="tel:+919876543210"
          className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
        >
          <FaPhoneAlt />
          Call Us
        </a>

        <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105">
          Book Test
        </button>
      </div>

      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl text-slate-700 lg:hidden"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  </div>

  {/* Mobile Menu */}
  <div
    className={`overflow-hidden transition-all duration-300 lg:hidden ${
      isOpen ? "max-h-96 border-t border-slate-200" : "max-h-0"
    }`}
  >
    <div className="bg-white px-6 py-5">
      <div className="flex flex-col gap-5">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="font-medium text-slate-700"
          >
            {link.name}
          </Link>
        ))}

        <button className="mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-semibold text-white">
          Book Test
        </button>
      </div>
    </div>
  </div>
</header>


);
}
