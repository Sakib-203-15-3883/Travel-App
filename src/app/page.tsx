"use client";
import Hero from "@/app/home/Hero"
import FeaturedTour from "@/app/home/featuredTour"
import CtaSection from "@/app/home/ctaSection"
export default function Home() {
  return (
    <>

    <Hero/>
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", fontSize:"30px", fontWeight:"bold", marginTop:"30px", color:"red"}} >Top Destination </div>
    <FeaturedTour/>
    <CtaSection/>

    
              
    </>
  );
}
