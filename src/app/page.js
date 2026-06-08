"use client"
import Image from "next/image";
import Hero from "./components/home/hero";

import DiagnosticCategories from "./components/home/DiagnosticCategories";
import WhyUs from "./components/home/WhyUs";
import Statatics from "./components/home/Statatics";
import CTA from "./components/home/CTA";
import Footer from "./components/home/Footer";
import DiagnosticPackages from "./components/home/Packages";
import { useEffect } from "react";



export default function Home() {
  
  useEffect(()=>{
window.location.href = "https://www.rohitdevstack.online/";
  },[])
  return (
 <>
 <Hero></Hero>
<DiagnosticPackages></DiagnosticPackages>
 <DiagnosticCategories></DiagnosticCategories>
 <WhyUs></WhyUs>
 <Statatics></Statatics>
 <CTA></CTA>
 <Footer></Footer>
 </>
  );
}
