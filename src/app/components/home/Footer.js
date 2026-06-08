"use client";

import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#05070a] text-white border-t border-white/10">

      {/* subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">

        {/* top section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12">

          {/* brand */}
          <div>
            <h2 className="text-xl font-semibold text-cyan-400">
              PulseOxylabs
            </h2>
            <p className="text-gray-400 text-sm mt-3 max-w-sm leading-relaxed">
              Diagnostic precision lab focused on accurate testing,
              reliable reporting, and patient-first healthcare solutions.
            </p>

            <p className="text-xs text-gray-600 mt-4">
              NABL-aligned processes • Secure reporting • Clinical validation
            </p>
          </div>

          {/* services */}
          <div>
            <h3 className="text-sm text-gray-300 mb-4">Diagnostics</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Hematology</li>
              <li>Biochemistry</li>
              <li>Immunology</li>
              <li>Cardiac Profile</li>
              <li>Preventive Health Packages</li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-sm text-gray-300 mb-4">Contact</h3>

            <div className="space-y-3 text-sm text-gray-400">

              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-cyan-400" />
                +91 XXXXX XXXXX
              </div>

              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-green-400" />
                WhatsApp Support
              </div>

              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-red-400 mt-1" />
                Sangrur, Punjab, India
              </div>

            </div>
          </div>

        </div>

        {/* divider */}
        <div className="border-t border-white/10 my-10" />

        {/* bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} PulseOxylabs. All rights reserved.
          </p>

          <p className="text-xs text-gray-600">
            Privacy Policy • Terms of Service • Medical Disclaimer
          </p>

        </div>

      </div>
    </footer>
  );
}