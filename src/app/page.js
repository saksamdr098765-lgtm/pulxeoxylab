import Image from "next/image";
import Hero from "./components/home/hero";
import Packages from "./components/home/Packages";
import DiagnosticCategories from "./components/home/DiagnosticCategories";
import WhyUs from "./components/home/WhyUs";
import Statatics from "./components/home/Statatics";
import CTA from "./components/home/CTA";
import Footer from "./components/home/Footer";

export default function Home() {
  return (
 <>
 <Hero></Hero>
 <Packages></Packages>
 <DiagnosticCategories></DiagnosticCategories>
 <WhyUs></WhyUs>
 <Statatics></Statatics>
 <CTA></CTA>
 <Footer></Footer>
 </>
  );
}
