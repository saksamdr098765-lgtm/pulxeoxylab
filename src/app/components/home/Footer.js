"use client";

import Link from "next/link";
import {
FaFacebookF,
FaInstagram,
FaLinkedinIn,
FaPhoneAlt,
FaEnvelope,
FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
return ( <footer className="bg-slate-950 text-slate-300"> <div className="mx-auto max-w-7xl px-6 py-16"> <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
{/* Company */} <div> <h3 className="text-2xl font-black text-white">
Pulxeoxy Labs </h3>


        <p className="mt-4 leading-relaxed text-slate-400">
          Delivering accurate diagnostics and trusted healthcare
          solutions with advanced technology and expert care.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-blue-600"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-pink-600"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-blue-500"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-bold text-white">
          Quick Links
        </h4>

        <ul className="mt-6 space-y-3">
          <li>
            <Link href="/" className="hover:text-white">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-white">
              About Us
            </Link>
          </li>

          <li>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
          </li>

          <li>
            <Link href="/packages" className="hover:text-white">
              Packages
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-lg font-bold text-white">
          Diagnostic Services
        </h4>

        <ul className="mt-6 space-y-3">
          <li>Blood Tests</li>
          <li>Pathology</li>
          <li>Radiology</li>
          <li>Cardiac Screening</li>
          <li>Health Checkups</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-lg font-bold text-white">
          Contact Us
        </h4>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="mt-1 text-blue-400" />
            <span>+91 98765 43210</span>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="mt-1 text-blue-400" />
            <span>info@pulxeoxylabs.com</span>
          </div>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 text-blue-400" />
            <span>
              123 Healthcare Street,
              <br />
              Punjab, India
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Pulxeoxy Labs. All Rights Reserved.
    </div>
  </div>
</footer>


);
}
