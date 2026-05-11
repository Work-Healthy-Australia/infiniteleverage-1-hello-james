import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatYouGet from "@/components/WhatYouGet";
import HowItWorks from "@/components/HowItWorks";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatYouGet />
        <HowItWorks />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
