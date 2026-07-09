import Nav from "@/components/nav";
import Hero from "@/components/hero";
import TrustStrip from "@/components/trust-strip";
import WhoThisIsFor from "@/components/who-this-is-for";
import AtmosphericBanner from "@/components/atmospheric-banner";
import AboutMarion from "@/components/about-marion";
import Experience from "@/components/experience";
import Timeline from "@/components/timeline";
import Location from "@/components/location";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Reserve from "@/components/reserve";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <WhoThisIsFor />
        <AtmosphericBanner />
        <AboutMarion />
        <Experience />
        <Timeline />
        <Location />
        <Testimonials />
        <FAQ />
        <Reserve />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
